import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../api/applications.js";

import { IoIosBulb } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "../store/useStore";

const icons = {
  golang: FaGolang,
  java: FaJava,
  python: FaPython,
  ruby: DiRuby,
  go: IoIosBulb,
};

function AppList() {
  const query = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
  });
  const selectedAppId = useStore((state) => state.selectedAppId);
  const setSelectedAppId = useStore((state) => state.setSelectedAppId);
  return (
    <Select
      value={selectedAppId}
      onValueChange={(value) => {
        setSelectedAppId(value);
      }}
    >
      <SelectTrigger className="w-full max-w-48 mb-2">
        <SelectValue placeholder="Select an Application" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Applications</SelectLabel>
          {query.data?.map((application) => {
            const Icon = icons[application.type];
            return (
              <SelectItem value={application.id} key={application.id}>
                <Icon /> {application.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AppList;
