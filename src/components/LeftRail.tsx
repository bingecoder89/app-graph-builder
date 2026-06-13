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
    <div className="absolute top-1/3 left-5 flex flex-col gap-1">
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
