import "./SongListItem";
import { Button, Table } from "semantic-ui-react";
import React from "react";
import useStore from "../../store/store";
import { Link } from "react-router-dom";

function SongListItem(props) {
  // Look at All The Properties of the Song Object, May Need Others Later
  let { name, album, artists, duration_ms, popularity, id } = props.song;
  let user = useStore((state) => state.user);
  let createdPlaylistData = useStore((state) => state.createdPlaylistData);
  let addCreatedPlaylistSongs = useStore(
    (state) => state.addCreatedPlaylistSongs
  );
  let deleteCreatedPlaylistSongs = useStore(
    (state) => state.deleteCreatedPlaylistSongs
  );

  return (
    <Table.Row>
      {user.username && user.moodifyToken && (
        <Table.Cell width="2">
          {!createdPlaylistData.songs.some((song) => song.id === id) ? (
            <Button
              compact
              size="small"
              onClick={() => addCreatedPlaylistSongs(props.song)}
            >
              {!props.compact ? "Add to Playlist" : "Add"}
            </Button>
          ) : (
            <Button
              compact
              size="small"
              onClick={() => deleteCreatedPlaylistSongs(id)}
            >
              {!props.compact ? "Delete from Playlist" : "Delete"}
            </Button>
          )}
        </Table.Cell>
      )}
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>
        <Link to={"/artists/" + artists[0].id}>{artists[0].name}</Link>
      </Table.Cell>
      {props.compact || (
        <Table.Cell>
          {album ? (
            <Link to={"/albums/" + album.id}>{album.name}</Link>
          ) : (
            <p>{props.albumName}</p>
          )}
        </Table.Cell>
      )}
      {props.compact || <Table.Cell>{duration_ms}</Table.Cell>}
    </Table.Row>
  );
}

export default SongListItem;
