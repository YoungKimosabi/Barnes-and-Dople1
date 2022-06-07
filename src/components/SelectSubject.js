import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const subjects=[{id:1, name:"Fiction"}, {id:2, name:"NonFiction"}, {id:3, name:"Cooking"}]

export default function SelectSubject() {
    const [sub, setSub] = useState('')

    const handleChange=(event)=>{
        console.log(event.target.value)
        if(event.target.value==='default'){
          setSub('')
          return
        }
        setSub(JSON.parse(event.target.value))
    }

  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Subject
        </InputLabel>
        <NativeSelect
          defaultValue={'Select A Subject'}
          inputProps={{
            name: 'subject_id',
            id: 'subject_id',
          }}
        >
          <option value={sub?JSON.stringify(sub):'default'} onChange={(event)=>handleChange(event)}></option>
          {subjects?.map(
              (subject)=>(
                  <option key={subject.id} value={JSON.stringify(subject)}>{subject.name}</option>
                )
            )}
        </NativeSelect>
      </FormControl>
    </Box>
    </>
  );
}
