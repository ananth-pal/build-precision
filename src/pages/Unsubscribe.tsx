import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type Status = "loading" | "valid" | "already" | "invalid" | "submitting" | "success" | "error";

export default function Unsubscribe() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.valid) setStatus("valid");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      } catch {
        setStatus("invalid");
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setStatus("submitting");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else {
        setStatus("error");
        setMessage(data?.error || "Something went wrong.");
      }
    } catch (e: any) {
      setStatus("error");
      setMessage(e?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-md w-full border border-border rounded-md p-8 bg-card">
          <p className="text-xs tracking-[3px] text-primary font-semibold mb-4">PENTAGON</p>
          <h1 className="text-2xl font-semibold mb-4">Unsubscribe</h1>

          {status === "loading" && <p className="text-muted-foreground">Checking your link…</p>}

          {status === "valid" && (
            <>
              <p className="text-sm text-foreground/80 mb-6">
                Click below to confirm you want to unsubscribe from future emails from Pentagon.
              </p>
              <button
                onClick={confirm}
                className="w-full bg-primary text-primary-foreground py-2.5 rounded-md hover:opacity-90 transition"
              >
                Confirm unsubscribe
              </button>
            </>
          )}

          {status === "submitting" && <p className="text-muted-foreground">Processing…</p>}

          {status === "success" && (
            <p className="text-sm text-foreground/80">
              You have been unsubscribed. You will no longer receive emails from Pentagon.
            </p>
          )}

          {status === "already" && (
            <p className="text-sm text-foreground/80">
              This email address is already unsubscribed.
            </p>
          )}

          {status === "invalid" && (
            <p className="text-sm text-foreground/80">
              This unsubscribe link is invalid or has expired.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-destructive">{message || "Something went wrong."}</p>
          )}

          <div className="mt-8 text-sm">
            <Link to="/" className="text-primary hover:underline">Return to homepage</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
