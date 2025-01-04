import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="py-8">
        {/* container to center the content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="hidden lg:block lg:col-span-3">
              <Sidebar />
            </div>
            <div className="lg:col-span-9">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default layout;
