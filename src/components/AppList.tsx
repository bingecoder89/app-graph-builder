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

function AppList() {
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
          <SelectItem value="supertokens-golang">
            <IoIosBulb /> supertokens-golang
          </SelectItem>
          <SelectItem value="supertokens-java">
            <FaJava /> supertokens-java
          </SelectItem>
          <SelectItem value="supertokens-python">
            <FaPython /> supertokens-python
          </SelectItem>
          <SelectItem value="supertokens-ruby">
            <DiRuby /> supertokens-ruby
          </SelectItem>
          <SelectItem value="supertokens-go">
            <FaGolang /> supertokens-go
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AppList;
