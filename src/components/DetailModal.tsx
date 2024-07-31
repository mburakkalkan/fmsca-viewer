import { Box, Grid, Modal, Typography } from "@mui/material";
import { columnLabels, Record } from "../constants";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  minWidth: "300px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};

interface DetailModalProps {
  currentRecord?: Record;
  onClose: () => void;
}

export default function DetailModal({ currentRecord, onClose }: DetailModalProps) {
  return (
    <Modal open={Boolean(currentRecord)} onClose={onClose}>
      <Box sx={style}>
        <h2 className="text-center" style={{ marginTop: 0 }}>
          Record Details
        </h2>
        {currentRecord && (
          <Grid container spacing={1}>
            {Object.entries(currentRecord).map(([key, value]) => (
              <Grid item xs={6} key={key}>
                <Typography variant="body2" color="textSecondary">
                  <strong>{columnLabels[key]}:</strong> {value ?? "-"}
                </Typography>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Modal>
  );
}
