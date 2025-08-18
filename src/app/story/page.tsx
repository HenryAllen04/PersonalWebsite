/**
 * Purpose: Story page displaying personal timeline and journey
 * Features: Timeline component integration, consistent navbar, responsive design
 */
import { SharedNavbar } from "@/components/shared-navbar";
import Timeline from "@/components/ui/timeline";

export default function StoryPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <SharedNavbar />
      
      {/* Timeline Content */}
      <main>
        <Timeline />
      </main>
    </div>
  );
}
