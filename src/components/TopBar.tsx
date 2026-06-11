import { ModeToggle } from "./mode-toggle";
import { RiRemixLine } from "@remixicon/react";
import { RiShareLine } from "@remixicon/react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

function TopBar() {
  return (
    <div className="flex justify-between items-center p-2.5">
      <div className="flex items-center gap-1.5">
        <RiRemixLine size={32} />
        <p className="text-xl">Graphy</p>
      </div>
      <div className="flex items-center gap-2.5 outline-1">
        <Button variant="outline" size="icon">
          <RiShareLine />
        </Button>
        <ModeToggle />
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
      </div>
    </div>
  );
}

export default TopBar;
