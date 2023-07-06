import { db } from '@vercel/postgres';
import { config } from 'dotenv';
config()

const client = await db.connect();

export default function handler() {

  this.getAllSongs = async function(req, res) {
    const songs = await client.sql`SELECT * FROM songs;`;
    return res.status(200).json(songs.rows);
  }

  this.postSong = async function(req, res) {
    console.log(req.body);

    try {
      await client.sql`INSERT INTO songs (title, artist, submitted_by, comment) VALUES (${req.body.title}, ${req.body.artist}, ${req.body.submitted_by}, ${req.body.comment});`;
    } catch (error) {
      return res.status(500).json({ error });
    }

    const songs = await client.sql`SELECT * FROM songs;`;
    return res.status(200).json(songs.rows);
  }

  this.getAllWinners =  async function(req, res) {
    const winners = await client.sql`SELECT * FROM winners;`;
    return res.status(200).json(winners.rows);
  }

  this.postWinner = async function(req, res) {
    console.log(req.body);
    try {
      await client.sql`INSERT INTO winners (name, comment, date) VALUES (${req.body.name}, ${req.body.comment}, ${new Date().toLocaleString()});`;
    } catch (error) {
      return res.status(500).json({ error });
    }

    const winners = await client.sql`SELECT * FROM winners;`;
    return res.status(200).json(winners.rows);
  }




}
