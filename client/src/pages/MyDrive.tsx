import React from "react";
import Container from "../components/shared/Container";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";

const MyDrive = () => {
  return (
    <Container>
      <div className="bg-white p-8 rounded-xl border border-gray-100">
        <div className="text-xl font-bold">My Drive</div>
        <div className="mt-8 grid grid-cols-5 gap-6">
          <div className="px-6 py-4 border-blue-100 border rounded-lg hover:bg-blue-50 duration-75 cursor-pointer flex gap-2 text-sm items-center">
            <FolderRoundedIcon className="text-blue-500" />
            Folder
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyDrive;
