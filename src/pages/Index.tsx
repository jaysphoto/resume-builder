import Resume from "@/components/Resume";
// import CoverLetter from "@/components/CoverLetter";
import PrintButton from "@/components/PrintButton";
// import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 px-4">
      <PrintButton />
      <Resume />
    </div>
  );
      // <div className="no-print max-w-[850px] mx-auto my-8">
      //   <Separator className="bg-resume-divider" />
      //   <p className="text-center text-muted-foreground text-sm py-4">Cover Letter</p>
      //   <Separator className="bg-resume-divider" />
      // </div>

      // <CoverLetter />

      // <p className="no-print text-center text-muted-foreground text-sm mt-8 mb-4">
      //   Click "Print / Save PDF" to export both resume and cover letter as an ATS-friendly PDF
      // </p>

};

export default Index;
