import { RiMoonClearLine, RiRemixFill, RiSunLine } from "@remixicon/react";
import { RiShareLine } from "@remixicon/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

function TopBar() {
  return (
    <div className="flex justify-between items-center absolute top-4 left-4 right-4 z-10">
      <div className="flex items-center gap-2">
        <RiRemixFill className="bg-white" size={32} />
        <p className="text-xl text-white">Graphy</p>
      </div>
      <div className="flex items-center gap-1 outline-1 p-0.5 rounded-md">
        <Button>
          <RiShareLine />
        </Button>
        <Button>
          <RiMoonClearLine />
          <RiSunLine />
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default TopBar;
