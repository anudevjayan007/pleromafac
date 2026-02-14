import { useTranslation } from "react-i18next";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/info@pleromafac.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        toast.success("Message sent successfully");
        e.target.reset();
      } else {
        toast.error("Failed to send message");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-24 pb-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT – Text */}
        <div className="max-w-md">
          <span className="text-sm uppercase tracking-wider text-teal-400">
            {t("contact.label")}
          </span>

          <h2 className="mt-4 text-3xl font-semibold">
            {t("contact.heading")}
          </h2>

          <p className="mt-4 text-gray-300">
            {t("contact.intro")}
          </p>
        </div>

        {/* RIGHT – Compact form */}
       <form
  onSubmit={handleSubmit}
  className="
    relative
    bg-white/[0.04]
    border border-white/10
    rounded-xl
    p-6 md:p-8
    space-y-4
    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
  "
>
  {/* subtle top accent */}
  <div className="absolute top-0 left-6 right-6 h-px bg-white/20" />

  {/* FormSubmit config */}
  <input type="hidden" name="_captcha" value="false" />
  <input
    type="hidden"
    name="_subject"
    value="New enquiry from Pleroma website"
  />

  <div className="grid grid-cols-2 gap-4">
    <Input
      label={t("contact.name")}
      name="name"
      required
    />
    <Input
      label={t("contact.email")}
      name="email"
      type="email"
      required
    />
  </div>

  <Input
    label={t("contact.phone")}
    name="phone"
  />

  <Textarea
    label={t("contact.message")}
    name="message"
    rows={4}
    required
  />

  <button
    type="submit"
    disabled={loading}
    className="
      mt-2 inline-flex items-center justify-center
      bg-teal-500 hover:bg-teal-600
      text-black font-medium
      px-6 py-3 rounded-md
      transition disabled:opacity-50
    "
  >
    {loading ? "Sending…" : t("contact.submit")}
  </button>
</form>


      </div>
    </div>
  );
}

/* ---------- Inputs ---------- */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs mb-1 text-gray-400">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-white/20
                   px-0 py-2 text-white
                   focus:outline-none focus:border-teal-400"
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs mb-1 text-gray-400">
        {label}
      </label>
      <textarea
        {...props}
        className="w-full bg-transparent border-b border-white/20
                   px-0 py-2 text-white
                   resize-none
                   focus:outline-none focus:border-teal-400"
      />
    </div>
  );
}
