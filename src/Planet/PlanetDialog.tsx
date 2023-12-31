import { Typography, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { PlanetData } from "../types";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  planet: PlanetData;
}

export const PlanetDialog = ({ isOpen, handleClose, planet }: Props) => {
  const { name, diameter, climate, population } = planet;
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="planet-dialog-title"
      aria-describedby="planet-dialog-description"
    >
      <DialogTitle id="planet-dialog-title" variant="h2">
        {name}
      </DialogTitle>
      <DialogContent id="planet-dialog-description">
        <Typography>
          <b>Diameter:</b> {diameter}
        </Typography>
        <Typography>
          <b>Climate:</b> {climate}
        </Typography>
        <Typography>
          <b>Pupulation:</b> {population}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};
