import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      onClick={handlePrint}
      variant="outline"
      className="no-print fixed top-4 right-4 gap-2 shadow-md hover:shadow-lg transition-shadow"
    >
      <Printer className="w-4 h-4" />
      Print / Save PDF
    </Button>
  );
};

export default PrintButton;
