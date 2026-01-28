import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black/30 border-t border-white/10">
      <div className="container py-16">
        <div className="max-w-6xl mx-auto">

          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 items-start">

            {/* LEFT: Brand */}
            <div>
              <div className="text-xl font-semibold tracking-tight">
                Pleroma<span className="text-teal-400">.</span>
              </div>

              <p className="mt-4 text-sm text-gray-400 max-w-xs leading-relaxed">
                {t("footer.tagline")}
              </p>

              <p className="mt-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Pleroma Consultants.<br />
                {t("footer.rights")}
              </p>
            </div>

            {/* CENTER: Address */}
            <div className="text-sm text-gray-300 leading-relaxed">
              <p className="font-medium text-white mb-3">
                {t("footer.office")}
              </p>

              <p>
                23 Broom Hill<br />
                Portadown, NI<br />
                United Kingdom
              </p>

              <p className="mt-4">
                <a
                  href="mailto:info@pleromaconsultants.com"
                  className="hover:text-teal-400 transition"
                >
                  info@pleromaconsultants.com
                </a>
              </p>
            </div>

            {/* RIGHT: Social */}
            <div>
              <p className="font-medium text-white mb-4 text-sm">
                {t("footer.follow")}
              </p>

              <div className="flex gap-4">
                <SocialIcon
                  href="https://www.linkedin.com"
                  icon={<FaLinkedinIn />}
                  label="LinkedIn"
                />
                <SocialIcon
                  href="https://www.facebook.com"
                  icon={<FaFacebookF />}
                  label="Facebook"
                />
                <SocialIcon
                  href="https://www.instagram.com"
                  icon={<FaInstagram />}
                  label="Instagram"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

/* ---------------- */
/* Social Icon      */
/* ---------------- */

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center
                 rounded-full border border-white/15
                 text-gray-300
                 hover:text-teal-400 hover:border-teal-400/60
                 transition"
    >
      {icon}
    </a>
  );
}
