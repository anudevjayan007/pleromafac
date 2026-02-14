import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black/30 border-t border-white/10">
      <div className="container py-16">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-12 items-start">

            {/* LEFT: Brand */}
            <div>
              <img
                src="/light.png"
                alt="Pleroma – Safety Engineered. Access Designed."
                className="h-10 w-auto mb-4"
              />

              <p className="text-sm text-gray-400 max-w-xs">
                Safety Engineered. Access Designed.
              </p>

              <p className="mt-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Pleroma Consultants.<br />
                {t("footer.rights")}
              </p>
            </div>

            {/* CENTER: Addresses */}
            <div className="text-sm text-gray-300 leading-relaxed md:pl-8">
              <div className="mb-6">
                <p className="text-white font-medium">United Kingdom</p>
                <p className="mt-1">
                  23 Broom Hill<br />
                  Portadown, NI<br />
                  United Kingdom
                </p>
              </div>

              <div>
                <p className="text-white font-medium">Qatar</p>
                <p className="mt-1">
                  Warehouse A1-Ai, Dohatna Logistics Park<br />
                  Umm Shaharaine 1, Bldg 90<br />
                  St 1236, Zone 71, Doha
                </p>
              </div>
            </div>

            {/* RIGHT: Contact & Social */}
            <div>
              <p className="font-medium text-white mb-4 text-sm">
                Contact us
              </p>

              <div className="mb-6 space-y-1 text-sm">
                
                <a
                  href="mailto:team@coastlinerac.com"
                  className="block hover:text-teal-400 transition"
                >
                  team@coastlinerac.com
                </a>
              </div>

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
