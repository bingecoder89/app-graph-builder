import { RiMoonClearLine, RiRemixFill, RiSunLine } from "@remixicon/react";
import { RiShareLine } from "@remixicon/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";

function TopBar() {
  return (
    <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-2.5">
      <div className="flex items-center gap-1.5">
        <RiRemixFill className="bg-white" size={32} />
        <p className="text-xl text-white font-bold">Graphy</p>
      </div>
      <div className="flex items-center gap-1 p-0.5 outline-1 rounded-md">
        <Button variant="outline">
          <RiShareLine />
        </Button>
        <ButtonGroup>
          <Button variant="outline">
            <RiMoonClearLine />
          </Button>
          <Button variant="outline">
            <RiSunLine />
          </Button>
        </ButtonGroup>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default TopBar;
