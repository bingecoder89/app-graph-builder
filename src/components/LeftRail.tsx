import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { FaNetworkWired } from "react-icons/fa";
import { SiLinuxcontainers } from "react-icons/si";
import { BsFillGrid1X2Fill } from "react-icons/bs";

function LeftRail() {
  return (
    <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
      <Button variant="outline">
        <FaGithub />
      </Button>
      <Button variant="outline">
        <BiLogoPostgresql />
      </Button>
      <Button variant="outline">
        <DiRedis />
      </Button>
      <Button variant="outline">
        <DiMongodb />
      </Button>
      <Button variant="outline">
        <SiLinuxcontainers />
      </Button>
      <Button variant="outline">
        <BsFillGrid1X2Fill />
      </Button>
      <Button variant="outline">
        <FaNetworkWired />
      </Button>
    </div>
  );
}

export default LeftRail;
