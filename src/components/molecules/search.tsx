/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-labels */
import { forwardRef, Ref, useImperativeHandle } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { ApiMovies } from "../../api/api-movies";
import { Movies } from "../../models/interface/Movies";
import { RefObject } from "../../models/interface/RefObject/RefObject";

// interface UserProps {
//   searchFunction: Function;
// }

//TODO: Changes type of any
export const Search = forwardRef((props: {searchFunction: () => void}, ref: Ref<RefObject> ) => {
  const [state, setState] = React.useState<string>("");
  const { searchFunction } = props;

//   var test = {
//     "page": 1,
//     "results": [
//         {
//             "adult": false,
//             "backdrop_path": "/syVAWAnY6fTBDDFntHsM8vFjKex.jpg",
//             "genre_ids": [
//                 28,
//                 80,
//                 18,
//                 53
//             ],
//             "id": 136797,
//             "original_language": "en",
//             "original_title": "Need for Speed",
//             "overview": "The film revolves around a local street-racer who partners with a rich and arrogant business associate, only to find himself framed by his colleague and sent to prison. After he gets out, he joins a New York-to-Los Angeles race to get revenge. But when the ex-partner learns of the scheme, he puts a massive bounty on the racer's head, forcing him to run a cross-country gauntlet of illegal racers in all manner of supercharged vehicles.",
//             "popularity": 64.968,
//             "poster_path": "/z42kyMizgDKetejusZgucSQsQ4l.jpg",
//             "release_date": "2014-03-12",
//             "title": "Need for Speed",
//             "video": false,
//             "vote_average": 6.3,
//             "vote_count": 3595
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/bWjvYgY2kfhnfzvEDk96yiCz2oJ.jpg",
//             "genre_ids": [
//                 28,
//                 12,
//                 80
//             ],
//             "id": 1637,
//             "original_language": "en",
//             "original_title": "Speed",
//             "overview": "Los Angeles SWAT cop Jack Traven is up against bomb expert Howard Payne, who's after major ransom money. First it's a rigged elevator in a very tall building. Then it's a rigged bus--if it slows, it will blow, bad enough any day, but a nightmare in LA traffic. And that's still not the end.",
//             "popularity": 25.34,
//             "poster_path": "/Apu3Ecg11bIEEiKLnbhagGtWNg7.jpg",
//             "release_date": "1994-06-09",
//             "title": "Speed",
//             "video": false,
//             "vote_average": 7.1,
//             "vote_count": 4898
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/kH14XvCHKfMRz1sNsAMY0KpAKb0.jpg",
//             "genre_ids": [
//                 10751,
//                 28,
//                 12,
//                 35
//             ],
//             "id": 7459,
//             "original_language": "en",
//             "original_title": "Speed Racer",
//             "overview": "Speed Racer is the tale of a young and brilliant racing driver. When corruption in the racing leagues costs his brother his life, he must team up with the police and the mysterious Racer X to bring an end to the corruption and criminal activities. Inspired by the cartoon series.",
//             "popularity": 18.237,
//             "poster_path": "/AdHSTkL9fe5J6Exc8RB9vX1YmmH.jpg",
//             "release_date": "2008-05-07",
//             "title": "Speed Racer",
//             "video": false,
//             "vote_average": 6.2,
//             "vote_count": 1204
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/7RAUy9uaTsx0f2OYEueZYzNHLYc.jpg",
//             "genre_ids": [
//                 80,
//                 18,
//                 53
//             ],
//             "id": 466411,
//             "original_language": "en",
//             "original_title": "Speed Kills",
//             "overview": "Speedboat racing champion and multimillionaire Ben Aronoff leads a double life that lands him in trouble with the law and drug lords.",
//             "popularity": 9.104,
//             "poster_path": "/f4p18CwxidvznZYMA6m4qv5FCvp.jpg",
//             "release_date": "2018-11-16",
//             "title": "Speed Kills",
//             "video": false,
//             "vote_average": 5.6,
//             "vote_count": 94
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/wmwEjQpqNXEIadsQoqWUS1pVVBi.jpg",
//             "genre_ids": [
//                 28,
//                 12,
//                 53
//             ],
//             "id": 1639,
//             "original_language": "en",
//             "original_title": "Speed 2: Cruise Control",
//             "overview": "A disgruntled former employee hijacks the Seabourn Legend cruise liner. Set on a fixed course, without any means of communication and at the mercy of the hijacker, it's up to the one cop on vacation, and his soon to be fiancé (hopefully) Annie, to regain control of it before it kills the passengers and causes an environmental disaster. Insurmountable and daunting tasks awaits them on their  perilous journey throughout the ship trying to fend off the hijacker and save the passengers.",
//             "popularity": 15.119,
//             "poster_path": "/gnK1ocpwUTj24zAktzomOJsD2bu.jpg",
//             "release_date": "1997-06-13",
//             "title": "Speed 2: Cruise Control",
//             "video": false,
//             "vote_average": 4.5,
//             "vote_count": 1292
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/kcEI5ehs56OOdSWoMRCQPK53Usi.jpg",
//             "genre_ids": [
//                 35
//             ],
//             "id": 12236,
//             "original_language": "en",
//             "original_title": "Speed Zone",
//             "overview": "An illegal race that takes place over the United States and nothing will stop this bunch of racers except for the occasional cop or a damsel in distress. Jackie Chan's car is not in this one, but many new cars make up for that. Who will win? Who will crash? Who will not even finish? Sit down and buckle up for the ride of your life.",
//             "popularity": 7.243,
//             "poster_path": "/cmAgnjrH7TlKjYUpS9NMGMlbkre.jpg",
//             "release_date": "1989-04-21",
//             "title": "Speed Zone",
//             "video": false,
//             "vote_average": 4.5,
//             "vote_count": 58
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/kmGfwijCt8ufLp1V3L1VzYVaBIW.jpg",
//             "genre_ids": [
//                 28,
//                 35,
//                 53
//             ],
//             "id": 71141,
//             "original_language": "en",
//             "original_title": "Jake Speed",
//             "overview": "Jake Speed (Wayne Crawford) is the lead character in some of the biggest page-turners of the 1940s. A chiseled, heroic action figure, Speed saves lives on paper, but when a young girl is kidnapped and her sister (Karen Kopins) begs the real-life Speed for help, he must find a way to be as gallant as the book hero whose creation he's inspired. Accompanied by the victim's sibling, Speed flies to Africa to see if he's up to the task.",
//             "popularity": 4.093,
//             "poster_path": "/k17i0pFwdo3xJA0j7A5pG31QfGd.jpg",
//             "release_date": "1986-05-30",
//             "title": "Jake Speed",
//             "video": false,
//             "vote_average": 4.4,
//             "vote_count": 10
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/6bSkfrIFXDcyjGu08GmfBP6fJ5v.jpg",
//             "genre_ids": [
//                 35,
//                 18,
//                 10749,
//                 53
//             ],
//             "id": 55879,
//             "original_language": "en",
//             "original_title": "Speed-Dating",
//             "overview": "A high-energy romantic comedy that follows three bachelors, speeding through life and scheming on women. When it comes to the opposite sex, it’s about the “chase” and “finish line.” Dog (Chico Benymon, Life Is Not a Fairytale: The Fantasia Barrino Story) and Beaver (Leonard Robinson, TV’s Nick Cannon Presents: Wild ‘N Out) spend their last dime on a nightclub, while Too Cool (Wesley Jonathan, Roll Bounce) devises the ultimate scheme to get women and money – SPEED-DATING!",
//             "popularity": 2.755,
//             "poster_path": "/1wou83qnk3xMri490IjqnTT4HW9.jpg",
//             "release_date": "2010-01-01",
//             "title": "Speed-Dating",
//             "video": false,
//             "vote_average": 3.6,
//             "vote_count": 9
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/jXlyxmwM39pNUupSMrZiXXy70ah.jpg",
//             "genre_ids": [
//                 10751,
//                 16,
//                 35,
//                 9648
//             ],
//             "id": 409122,
//             "original_language": "en",
//             "original_title": "Scooby-Doo! and WWE: Curse of the Speed Demon",
//             "overview": "When Scooby and Mystery Inc. visit an off-road racing competition, it's not long before strange events start to occur. A mysterious phantom racer, known only as Inferno, is causing chaos and is determined to sabotage the race. It's up to Scooby-Doo, Shaggy and their new driving partner, The Undertaker, to save the race and solve the mystery.",
//             "popularity": 15.86,
//             "poster_path": "/kCWtWbZhyY48XpYC3n5hinuufH.jpg",
//             "release_date": "2016-08-09",
//             "title": "Scooby-Doo! and WWE: Curse of the Speed Demon",
//             "video": false,
//             "vote_average": 7.8,
//             "vote_count": 141
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/wHvdmUIP8EsoLFOwpgZ7p1ozlDw.jpg",
//             "genre_ids": [
//                 28,
//                 53
//             ],
//             "id": 17144,
//             "original_language": "en",
//             "original_title": "Exit Speed",
//             "overview": "On Christmas Eve, ten strangers board a bus traveling across Texas and are forced off the road by a motorcycle gang. The passengers then take refuge in an abandoned scrap yard. When their defense against the gang weakens and their numbers dwindle they must do the unthinkable go on the offense.",
//             "popularity": 4.037,
//             "poster_path": "/9WU9FDMdkUBMNXbqQ7rwu7WmhcT.jpg",
//             "release_date": "2008-08-26",
//             "title": "Exit Speed",
//             "video": false,
//             "vote_average": 5.1,
//             "vote_count": 37
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/mesKQpakY3J8gjEXuLlJDyNhlUt.jpg",
//             "genre_ids": [
//                 99
//             ],
//             "id": 720748,
//             "original_language": "en",
//             "original_title": "The Speed Cubers",
//             "overview": "This documentary captures the extraordinary twists and turns in the journeys of Rubik's Cube-solving champions Max Park and Feliks Zemdegs.",
//             "popularity": 5.034,
//             "poster_path": "/wuJmswUneNrlCUYpZ8NDU7FHjIG.jpg",
//             "release_date": "2020-07-29",
//             "title": "The Speed Cubers",
//             "video": false,
//             "vote_average": 7.5,
//             "vote_count": 71
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/45F7zjp60qDINKuCXSrsBZD6MxZ.jpg",
//             "genre_ids": [
//                 35
//             ],
//             "id": 26176,
//             "original_language": "en",
//             "original_title": "Mother, Jugs & Speed",
//             "overview": "Mother, Jugs and Speed work for a ambulance company competing for a L.A. city contract.",
//             "popularity": 4.343,
//             "poster_path": "/ozIPoDZhBJ7WQAczMLLiSrrcQjT.jpg",
//             "release_date": "1976-01-01",
//             "title": "Mother, Jugs & Speed",
//             "video": false,
//             "vote_average": 5.8,
//             "vote_count": 27
//         },
//         {
//             "adult": false,
//             "backdrop_path": null,
//             "genre_ids": [],
//             "id": 532596,
//             "original_language": "en",
//             "original_title": "Need for Speed",
//             "overview": "Three girls drive around Hollywood without paying much attention to the road.",
//             "popularity": 4.316,
//             "poster_path": "/9tUsnnbd9B88Wnr3CM203i51iGy.jpg",
//             "release_date": "2018-05-25",
//             "title": "Need for Speed",
//             "video": false,
//             "vote_average": 8.3,
//             "vote_count": 3
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/qySEOp4MLscb9JDl89ooUJKpbVn.jpg",
//             "genre_ids": [
//                 80,
//                 28,
//                 53
//             ],
//             "id": 47467,
//             "original_language": "en",
//             "original_title": "Kill Speed",
//             "overview": "KILL SPEED is a high-octane, youth oriented, TOP GUN meets FAST & FURIOUS tale about best friends who fly home-built, high-tech planes to deliver Mexican manufactured crystal meth throughout rural California in order to fund their Hollywood, rock-star lifestyle.",
//             "popularity": 2.63,
//             "poster_path": "/w64IOlFCuM2s7XRqW3pO5wTeHg6.jpg",
//             "release_date": "2010-07-02",
//             "title": "Kill Speed",
//             "video": false,
//             "vote_average": 4.4,
//             "vote_count": 23
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/ru7nIN27lrgHR9KbtRZQeovIKYz.jpg",
//             "genre_ids": [
//                 28,
//                 27,
//                 53
//             ],
//             "id": 72344,
//             "original_language": "ru",
//             "original_title": "Speed Demon",
//             "overview": "In this supernatural take on The Fast and the Furious, college student Jesse returns home only to find that his old stomping ground has been overrun by a gang of street racers that dabbles in the black arts. But things take a bloody turn for the gang members when a supercharged muscle car starts running them down. Can Jesse stop the fuel-injected killing machine and unmask the mysterious driver?",
//             "popularity": 2.572,
//             "poster_path": "/5pdQqWVloxcQGpYzj1Icj0ja41P.jpg",
//             "release_date": "2003-11-10",
//             "title": "Speed Demon",
//             "video": false,
//             "vote_average": 3.9,
//             "vote_count": 10
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/c1L67dzf8sLTPBSl6i0g6sYqzdF.jpg",
//             "genre_ids": [
//                 28,
//                 53,
//                 878
//             ],
//             "id": 60164,
//             "original_language": "en",
//             "original_title": "The Speed of Thought",
//             "overview": "Joshua Lazarus (Nick Stahl) is a telepath who has been raised in a NSA foster home. Lazarus helps the government by using his abilities. He is told by the agency that the telepathy is a side effect of Widmann's Disease, and that he will become insane in time and eventually die from the illness. However, Lazarus meets a woman with similar powers (Mía Maestro) who does not have any sign of the disease, launching Lazarus to confront the lies he has been told",
//             "popularity": 4.277,
//             "poster_path": "/yUUj6o7u9IQD8btR56N0eo2N5WE.jpg",
//             "release_date": "2011-04-29",
//             "title": "The Speed of Thought",
//             "video": false,
//             "vote_average": 4.8,
//             "vote_count": 33
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/nXOR6cJ8j4sJtZvzIMlE2AEux2f.jpg",
//             "genre_ids": [
//                 99
//             ],
//             "id": 37363,
//             "original_language": "en",
//             "original_title": "Speed",
//             "overview": "A documentary on the history on mankind's attempts to reach high speeds. Starting with the invention of the bicycle, going on to sports cars, cars with jet engines, rocket-powered cars, attempts to break the sound barrier, and rocket-engine airplanes. Each achievement is documented by title card indicating the speed reached in miles per hour.",
//             "popularity": 1.637,
//             "poster_path": "/jUc5WoixIyxOFXALWmdkP06oolQ.jpg",
//             "release_date": "1984-01-01",
//             "title": "Speed",
//             "video": false,
//             "vote_average": 6.3,
//             "vote_count": 6
//         },
//         {
//             "adult": false,
//             "backdrop_path": null,
//             "genre_ids": [
//                 99
//             ],
//             "id": 901224,
//             "original_language": "en",
//             "original_title": "Queen of Speed",
//             "overview": "A documentary on the life of rally driver Michèle Mouton.",
//             "popularity": 2.729,
//             "poster_path": "/7joRyyflptPJ7WhtHruBWKWvgGj.jpg",
//             "release_date": "2021-11-20",
//             "title": "Queen of Speed",
//             "video": false,
//             "vote_average": 0,
//             "vote_count": 0
//         },
//         {
//             "adult": false,
//             "backdrop_path": null,
//             "genre_ids": [
//                 10402
//             ],
//             "id": 977393,
//             "original_language": "en",
//             "original_title": "SPEED - NOT THAT NICE",
//             "overview": "Sequel to the SPEED - \"WE SEE U\" movie. Once again directed, filmed and edited by Jack Rudder. Music recorded, mixed and mastered by Elliott Gallart at The Chameleon Studios.",
//             "popularity": 2.744,
//             "poster_path": null,
//             "release_date": "2022-05-18",
//             "title": "SPEED - NOT THAT NICE",
//             "video": false,
//             "vote_average": 0,
//             "vote_count": 0
//         },
//         {
//             "adult": false,
//             "backdrop_path": null,
//             "genre_ids": [
//                 53
//             ],
//             "id": 967736,
//             "original_language": "en",
//             "original_title": "Speed Trap",
//             "overview": "A friendly woman is pulled over in the middle of nowhere by an officer who is not what he seems.",
//             "popularity": 1.911,
//             "poster_path": null,
//             "release_date": "2022-04-28",
//             "title": "Speed Trap",
//             "video": false,
//             "vote_average": 0,
//             "vote_count": 0
//         }
//     ],
//     "total_pages": 21,
//     "total_results": 407
// }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  useImperativeHandle(ref, () => ({SearchHandle}));

  const SearchHandle = async(): Promise<Movies[]> => {
      //TODO: CHANGES 
    const { data } = await ApiMovies.Search.MoviesByName(state);
    const convert = test.results as Movies[];
    return convert;
  }

  const handleSubmit = () => {
    searchFunction();
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Movies"
        inputProps={{ "aria-label": "search movies" }}
        name="search"
        value={state}
        onChange={handleChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => handleSubmit()}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
});
