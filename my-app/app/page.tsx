import { Assistant } from "./assistant";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-grow">
        <Assistant />
      </main>
      <footer className="w-full py-4 text-center bg-card/80 text-foreground">
        <p>Created by Shoaib</p>
      </footer>
    </div>
  );
}