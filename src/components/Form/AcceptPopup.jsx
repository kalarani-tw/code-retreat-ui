import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function AcceptPopup({ open, setOpen, employeeSelected }) {
  const [notes, setNotes] = useState('');
  const [lastWorkingDate, setLastWorkingDate] = useState(new Date());

  const handleClose = () => {
    setOpen(false);
  };

  console.log(employeeSelected);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{employeeSelected.employeeName}</DialogTitle>
        <DialogContent className="flex flex-col w-64">
          <TextareaAutosize
            className="border border-wave-blue px-2 py-2 rounded mb-4"
            placeholder="Enter notes for employee..."
            minRows={3}
            value={notes}
            onChange={(event) => {
              setNotes(event.target.value);
            }}
          />
          <p className="mb-2">Last Working Date: </p>
          <input
            type="date"
            className="border border-wave-blue px-2 py-2 rounded mb-2"
            value={lastWorkingDate}
            onChange={(event) => {
              setLastWorkingDate(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
