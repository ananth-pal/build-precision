import { useState } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(200),
  company: z.string().trim().min(1, "Required").max(200),
  email: z.string().trim().email("Invalid email").max(255),
  country: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(50).optional(),
  notes: z.string().trim().max(2000).optional(),
});

type FormState = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  variant?: "machine-list" | "brochure";
  onSuccess?: () => void;
}

const initial: FormState = { name: "", company: "", email: "", country: "", phone: "", notes: "" };

export default function RequestMachineListDialog({ open, onOpenChange, variant = "machine-list", onSuccess }: Props) {
  const isBrochure = variant === "brochure";
  const copy = isBrochure
    ? {
        title: "Download Company Brochure",
        description: "Provide a few details and we will start your download and email you a copy for reference.",
        submit: "Get Brochure",
        successTitle: "Thank you",
        successBody: "Your download has started. A confirmation has also been sent to your email.",
        notesLabel: "Anything specific you're looking to learn?",
        eventName: "brochure_download_request",
      }
    : {
        title: "Request Detailed Machine List",
        description: "Provide a few details and we will send the full machine list, including makes, models, and capacities.",
        submit: "Send Request",
        successTitle: "Request received",
        successBody: "Thank you. A confirmation has been sent to your email, and our team will be in touch shortly.",
        notesLabel: "Intended application / notes",
        eventName: "machine_list_request",
      };
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setForm(initial);
    setErrors({});
    setSubmitted(false);
  };

  const handleClose = (o: boolean) => {
    onOpenChange(o);
    if (!o) setTimeout(reset, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setErrors(
        Object.fromEntries(
          Object.entries(flat).map(([k, v]) => [k, v?.[0] ?? ""])
        ) as Partial<Record<keyof FormState, string>>
      );
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-machine-list-request", {
        body: { ...parsed.data, purpose: variant },
      });
      if (error || (data && (data as { error?: string }).error)) {
        throw new Error(error?.message || (data as { error?: string })?.error || "Unknown error");
      }
      setSubmitted(true);
      const { trackEvent } = await import("@/lib/analytics");
      trackEvent(copy.eventName, {});
      onSuccess?.();
    } catch (err) {
      console.error(err);
      toast.error("Could not submit your request. Please try again or email enquiries@sellvindsgroup.com.");
    } finally {
      setSubmitting(false);
    }
  };

  const field = (key: keyof FormState) => ({
    value: form[key] ?? "",
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
    className: `w-full px-4 py-2.5 border ${errors[key] ? "border-destructive" : "border-input"} rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
  });

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
          <DialogDescription>
            {copy.description}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="mx-auto text-primary" size={40} />
            <h3 className="text-lg font-semibold">{copy.successTitle}</h3>
            <p className="text-sm text-muted-foreground">
              {copy.successBody}
            </p>
            <button
              type="button"
              onClick={() => handleClose(false)}
              className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-sm font-medium mb-1.5">Full Name *</label>
              <input type="text" {...field("name")} />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Company *</label>
              <input type="text" {...field("company")} />
              {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email *</label>
              <input type="email" {...field("email")} />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Country</label>
                <input type="text" {...field("country")} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Phone</label>
                <input type="tel" {...field("phone")} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{copy.notesLabel}</label>
              <textarea
                rows={3}
                value={form.notes ?? ""}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                className="w-full px-4 py-2.5 border border-input rounded bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {submitting && <Loader2 size={16} className="animate-spin" />}
              {submitting ? "Sending…" : copy.submit}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
