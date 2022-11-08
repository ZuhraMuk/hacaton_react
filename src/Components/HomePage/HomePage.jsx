import { Diversity1 } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./HomePage.css";
import logo from "../Logo/logo.png";

const HomePage = () => {
  return (
    <>
      <div className="content">
        <img src={logo} alt="logo" style={{ width: 100, margin: "10px" }} />
        <div className="homeContent">
          <div
            style={{
              width: 250,
              backgroundColor: "#f8fafd",
              borderTop: "10px solid #a7b4b9",
            }}>
            <img
              src="https://gcontent.robertsonmarketing.com/store/20160512512/assets/themes/theme1_en/images/home/aug19/YouTube_Collection_March_2022.png"
              sx={{ zIndex: "tooltip" }}
              width={250}
              height={250}
              alt=""
            />
            <h4>T-shirts prooving ur a Youtuber</h4>
            <span style={{ lineHeight: "1" }}>
              We collected the YouTube data using a set of custom scripts
              written in Perl. We bootstrapped the data collection process by
              using a Perl script to find the list of newly...
            </span>
          </div>

          <div
            style={{
              width: 250,
              backgroundColor: "#f8fafd",
              borderTop: "10px solid #b5c2d3",
            }}>
            <img
              src="https://cdna.lystit.com/1040/1300/n/photos/ayzedclothing/e8030a74/c-p-company--Full-Zip-Google-Hoodie-Mint-Green.jpeg"
              sx={{ zIndex: "modal" }}
              width={250}
              height={250}
              alt=""
            />
            <h4>Hoodies,keeping your comf</h4>
            <span style={{ lineHeight: "1" }}>
              Fleece back and loopback cotton are the most likely options you'll
              find in the best hoodies. They're ideal because they're
              comfortable, hard-wearing, and easily washed...
            </span>
          </div>

          <div
            style={{
              width: 250,
              backgroundColor: "#f8fafd",
              borderTop: "10px solid #7b93bd",
            }}>
            <img
              src="https://shop.googlemerchandisestore.com/store/20160512512/assets/items/images/GGOEYXXX2043.webp"
              // sx={{ zIndex: "tooltip" }}
              width={250}
              height={250}
              alt=""
            />
            <h4>Thermos,keeping the warmth</h4>
            <span style={{ lineHeight: "1" }}>
              Drinkware, beverageware, and barware are general terms for the
              class of vessels from which people drink. It includes stemware, or
              glasses that stand on stems...
            </span>
          </div>

          <div
            style={{
              width: 250,
              backgroundColor: "#f8fafd",
              borderTop: "10px solid #2d6ab5",
            }}>
            <img
              src="https://shop.googlemerchandisestore.com/store/20160512512/assets/items/images/GGOEYXXX1801.jpg"
              sx={{ zIndex: "tooltip" }}
              width={250}
              height={250}
              alt=""
            />
            <h4>Noteworthy Notebooks</h4>
            <span style={{ lineHeight: "1" }}>
              A notebook (also known as a notepad, writing pad, drawing pad, or
              legal pad) is a book or stack of paper pages that are often ruled
              and used for purposes such as...
            </span>
          </div>
        </div>
        <div className="homeContent">
          <img
            src="https://shop.googlemerchandisestore.com/store/20160512512/assets/items/images/GGOEYXXX1799.jpg"
            id="homeImg"
          />
          <div
            id="homeText"
            style={{
              width: "500px",
              borderTop: "10px solid gray",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              height: "440px",
            }}>
            <h3>The Ripl Effect</h3>
            <span style={{ lineHeight: "2" }}>
              This is no ordinary water bottle. Every RIPL Goods bottle funds a
              day of employment for a Balinese local to collect plastic from
              beaches. The plastic they collect is then used to make water
              purifiers, reducing their community's reliance on bottled water.
              The Google Merchandise Store is proud to say that by partnering
              with RIPL Goods we have funded just under 5 years of employment
              for their team in Bali while removing the equivalent of 1.5
              million plastic bottles from the environment. By supporting RIPL,
              you're bringing everything full circle and making waste plastic
              useful again.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
