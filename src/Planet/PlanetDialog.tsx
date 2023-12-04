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
      <DialogTitle id="planet-dialog-title">{name}</DialogTitle>
      <DialogContent id="planet-dialog-description"></DialogContent>
      <Typography>Diameter: {diameter}</Typography>
      <Typography>Climate: {climate}</Typography>
      <Typography>Pupulation: {population}</Typography>
    </Dialog>
  );
};
