export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-textSecondary">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          <a className="hover:text-primary" href="mailto:sinanckz2021@gmail.com">Email</a>
          <a className="hover:text-primary" target="_blank" href="https://linkedin.com/in/sinaaanck">LinkedIn</a>
          <a className="hover:text-primary" target="_blank" href="https://github.com/sinaaanck">GitHub</a>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Sinaaan CK. All rights reserved.</p>
      </div>
    </footer>
  );
}
