import { Avatar, AvatarGroup, Box, Show, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import useGetStatusProfile from "../../Hooks/useGetStatusProfile";
import { linearGradient } from "framer-motion/client";

export default function Status() {
  const { isLoading, statusProfileUsers } = useGetStatusProfile();
  const smSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
  };

  const lgSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <Box position={"sticky"} p={5} h={"100px"} w={"650px"}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Show below="sm">
        <Slider {...smSettings}>
          {statusProfileUsers.map((user, index) => (
            <Box justifyItems={"center"} key={index}>
              <AvatarGroup>
                <Avatar
                  src={user.profilePicURL}
                  alt="user profile pic"
                  size={"lg"}
                  border={"2px solid red"}
                />
              </AvatarGroup>
              <Text>{user.username}</Text>
            </Box>
          ))}
        </Slider>
      </Show>

      <Show above="sm">
        <Slider {...lgSettings}>
          {statusProfileUsers.map((user, index) => (
            <Box justifyItems={"center"} key={index}>
              <AvatarGroup>
                <Avatar
                  src={user.profilePicURL}
                  alt="user profile pic"
                  size={"lg"}
                  border={"2px solid red"}
                />
              </AvatarGroup>
              <Text>{user.username}</Text>
            </Box>
          ))}
        </Slider>
      </Show>
    </Box>
  );
}
