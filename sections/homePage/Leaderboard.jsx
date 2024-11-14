import Image from 'next/image';
import React, { useState, useEffect, useMemo } from 'react';
import { CiSearch } from "react-icons/ci";
import useDebounce from '../../hooks/useDebounce';
import instance from "../../utils/instance";
import { Box, Text, Spinner } from '@chakra-ui/react';
import Wrapper from '../../components/Wrapper';
import AppButton from '../../components/AppButton';
import trophy from "../../public/others/trophy.svg";
import first from "../../public/others/1st.png";
import second from "../../public/others/2nd.png";
import third from "../../public/others/3rd.png";
import others from "../../public/others/others.png";

const Leaderboard = () => {
  const limit = 15;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    setLoading(true);
    const fetchLeaderboard = async () => {
      const data = await instance.get(`/user/leaderboard?limit=${limit}&search=${searchTerm}`);
      setLoading(false);
      setData(data?.data?.data);
    }
    fetchLeaderboard();
  }, [debouncedSearch]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const showIdImage = (index) => {
    let widget = "";
    switch (index) {
      case "1":
        widget = <Image src={first} alt="First" width="20" height="20" />
        break;
      case "2":
        widget = <Image src={second} alt="Second" width="20" height="20" />
        break;
      case "3":
        widget = <Image src={third} alt="Third" width="20" height="20" />
        break;
    
      default:
        widget = <Image src={others} alt="Others" width="20" height="20" />
        break;
    }

    return (
      <Box display="flex" alignItems="center">
        {widget}
        <Text ml={2}>
          {index.length === 1 ? `0${index}` : index}
        </Text>
      </Box>
    )
  }

  const getLeaderBadge = (index) => {
    let colors = {};
    switch (index) {
      case "1":
        colors = {
          text: "#E24311",
          bg: "#FFEFEB"
        }
        break;
      case "2":
        colors = {
          text: "#B0B71C",
          bg: "#F6F8D3"
        }
        break;
      case "3":
        colors = {
          text: "#0452C8",
          bg: "#EBF7FF"
        }
        break;
    
      default:
        colors = {
          text: "#1A202C",
          bg: "#E0E0E0"
        }
        break;
    }

    return colors;
  }

  console.log(">>>>>>", debouncedSearch);

  return (
      <Box
        id='leaderboard'
        py={100}
        width="100%"
        borderRadius="0"
        overflowX="hidden"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage="others/leaderboard_bg.png"
      >
        <Wrapper
            data-aos="fade-right"
            width={{ sm: '90%', md: "100%", lg: '100%', xl: "70%" }}
            px={{ base: 6, md: 36, lg: 20 }}
            py={{ base: 6, md: 36, lg: 10 }}
            marginY="auto"
            marginX="auto"
            style={{
                textAlign: "center",
            }}
        >
          <Wrapper width={{ base: '90%', lg: '90%' }}>
            <Text
                  fontWeight="600"
                  fontSize={{ base: '28px', lg: '32px' }}
                  mb={2}
                  as="h2"
                  color="#E24311"
              >
                  Goody Points Leaderboard
              </Text>
              <Text
                  fontWeight={{ base: '500', lg: '400' }}
                  // color="brand.grey"
                  lineHeight="28px"
                  fontSize={{ base: '16px', lg: '16px' }}
                  mb={4}
              >
                  Check out the top users earning the most Goody Points and see where you stand!
              </Text>
          </Wrapper>
          <Wrapper
            width={{ base: "100%", lg: "100%" }}
            px={{ base: 10, md: 10, lg: 10 }}
            py={{ base: 10, md: 10, lg: 7 }}
            marginY={20}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px"
            }}
          >
            <Box
              display="flex"
              flexDirection={{ base: 'column', lg: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              mb="5"
            >
              <Box display="flex" flexDirection="row" alignItems="center">
                <Text
                  fontWeight={{ base: '600', lg: '600' }}
                  lineHeight="28px"
                  color="#E24311"
                  fontSize={{ base: '16px', lg: '16px' }}
                  mr="2"
                >
                  This Week's Top Leaders 
                </Text>
                <Image src={trophy} alt="trophy" width={20} />
              </Box>
              <Box
                width={{ base: "50%", lg: "30%" }}
                className='flex items-center border rounded-sm px-3 py-2 input-container'
              >
                <CiSearch size={15} />
                <input type="text" value={searchTerm} placeholder="Search" name="search" onChange={handleChange} className="ml-4" />
              </Box>
            </Box>
              {!loading ? (
                <table style={{
                  width: "100%"
                }}>
                  <thead>
                    <tr>
                      <th width="20%">No</th>
                      <th>Username</th>
                      <th>Full Name</th>
                      <th>Total Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((d) => {
                      const colors = getLeaderBadge(d.index);
                      return (
                        <tr key={d?.index} style={{
                          backgroundColor: ["1", "2", "3"].includes(d.index) ? "rgb(246, 248, 211, 0.4)" : "inherit"
                        }}>
                          <td>{showIdImage(d.index)}</td>
                          <td>
                            <span style={{
                              padding: "5px 10px",
                              fontSize: "13px",
                              fontWeight: 500,
                              borderRadius: "5px",
                              color: colors.text,
                              backgroundColor: colors.bg
                            }}>
                              {d?.username}
                            </span>
                          </td>
                          <td>{d?.first_name} {d?.last_name}</td>
                          <td>{d?.total_points}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                ) : (
                  <div style={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Spinner size="md" />
                  </div>
                )}
                {(!data.length && !loading) && (
                  <div style={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Text>No leaderboard result found.</Text>
                  </div>
                )}
          </Wrapper>
          <Wrapper width={{ base: '90%', lg: '90%' }} color="#102816">
            <Text
                  fontWeight="600"
                  fontSize={{ base: '20px', lg: '24px' }}
                  mb={2}
                  as="h2"
                  color="#102816"
              >
                  Where Do You Rank?
              </Text>
              <Text
                  fontWeight={{ base: '500', lg: '400' }}
                  // color="brand.grey"
                  lineHeight="24px"
                  fontSize={{ base: '14px', lg: '15px' }}
                  mb={4}
              >
                  Seen how you stack up against other users? Whether you’re already part of the Goody Points Challenge or just discovering it, everyone has a chance to climb the leaderboard. Increase your points and claim your spot at the top!
              </Text>
              <AppButton
                title="Learn More"
                theme="brand.primary1"
                color="white"
                fontSize="14px"
                padding="8px 16px"
                onClick={() => window.open('https://download.luximapp.com/thank-you/', '_blank')}
              />
          </Wrapper>
        </Wrapper>
      </Box>
  );
};

export default Leaderboard;
