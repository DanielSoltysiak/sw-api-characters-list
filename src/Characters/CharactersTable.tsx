import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import { CharacterRow, PlanetData } from "../types";
import { getCharactersTableColumns } from "./getCharactersTableColumns";
import { fetchCharacters } from "./fetchCharacters";
import { PlanetDialog } from "../PlanetDialog";

export const CharactersTable = () => {
  const [rows, setRows] = useState<CharacterRow[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planetModalData, setPanetModalData] = useState<PlanetData>({
    name: "",
    population: "",
    climate: "",
    diameter: "",
  });

  const handleModalOpen = (planet: PlanetData) => {
    setPanetModalData(planet);
    setIsModalOpen(true);
  };
  const handleModalClose = () => setIsModalOpen(false);

  const columns = getCharactersTableColumns(handleModalOpen);

  useEffect(() => {
    fetchCharacters(setRows);
  }, []);

  return (
    <Box>
      <PlanetDialog
        isOpen={isModalOpen}
        handleClose={handleModalClose}
        planet={planetModalData}
      />
      <DataGrid
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
};
