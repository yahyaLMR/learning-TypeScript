
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <h1>Application Header</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>Application Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
