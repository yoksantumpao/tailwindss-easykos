import Navigation from "@/components/navigation";

interface child {
  children: React.ReactNode;
}

export default function RootLayout({ children }: child) {
  return (
    <>
      <div className="md:hidden">
        <Navigation />
      </div>
      {children}
    </>
  );
}
