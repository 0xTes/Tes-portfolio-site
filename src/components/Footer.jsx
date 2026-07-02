export default function Footer() {
  return (
    <footer className="mt-20 bg-teal-600 px-6 py-6 text-center text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} Teslim Yussuph
        </p>

        <p className="mt-2 text-sm text-teal-100">
          Front-end Developer • Project Manager • Digital Marketer • Consultant
        </p>

        <p className="mt-3 text-xs text-teal-200">
          Built with React, Tailwind CSS & WooCommerce
        </p>
      </div>
    </footer>
  );
}