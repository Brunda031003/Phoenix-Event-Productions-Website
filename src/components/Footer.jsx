export default function Footer() {
  return (
    <footer className="py-10 bg-black border-t border-border">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-center items-center text-sm md:text-md text-white text-center gap-2">

          <p>
            ©2026 Phoenix Event Productions. All rights reserved.
          </p>

          <p className="md:ml-2">
            Designed and developed by{" "}
            <a
              href="https://www.instagram.com/firstecho.in?igsh=MmRoNDB4Z2R2aGU="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ED1D27] hover:underline"
            >
              FirstEcho
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
