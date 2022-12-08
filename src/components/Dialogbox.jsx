import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);
  const [newpass, setNewpass] = React.useState('')

  const handleClose = () => {
    setOpen(false);
  };
  function setpass(e){
    setNewpass(e.target.value)
    console.log(newpass);
  }
  function handleSubmit(){
    localStorage.setItem('password',newpass)
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>RESET-PASSWORD</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your new password:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="PASSWORD"
            type="Password"
            fullWidth
            variant="standard"
            onChange={setpass}
          />
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}