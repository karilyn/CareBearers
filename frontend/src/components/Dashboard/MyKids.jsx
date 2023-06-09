import React, { useState, useEffect } from "react";
import './MyKids.scss';
import { useAppState } from "../../AppState";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navbar from "./Navbar";

function Kids(props) {
  const [kids, setKids] = useState([]);

  const { state, dispatch } = useAppState();
  const token = state.token;

  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Authorization': 'Bearer '+ token}
  });

  useEffect(() => {
    let mounted = true;
    instance.get('/kids')
    .then((items) => {
      setKids(items.data);
    })
    return () => mounted = false;
  },[])

  return (
<>
    <Navbar />
      <h2>My Kids</h2>
      {kids.map((kid) => {
        return (
          <Card key={kid.id} sx={{ width: 320, marginTop: 5, marginLeft: 50 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {kid.name}, {kid.age}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {kid.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
</>
  );
}

export default Kids;