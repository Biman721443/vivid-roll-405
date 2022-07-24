import React from 'react'
import {Box, Flex,Heading,Image, Text,} from "@chakra-ui/react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const SProductCard = ({data, title}) => {
 
  const navigate = useNavigate();
  const handleProduct = (id)=> {
        // console.log(id)
        navigate(`/description/${title}/${id}`);
  }
  return (
    <div style={{marginTop:"4rem"}}>
      <Heading style={{textAlign:"center",fontSize:"3rem"}}>{title}</Heading>
    <DataWrapper>
      {data?.map((item)=>{
        return (

          <Flex key={item.id} direction={'column'} mb={"40px"} p={2} w={"90%"} onClick={()=>{ handleProduct(item.id)}} >
            <Box >
                <Image src={item.image[0]} alt='Unavailable' />

            </Box>
            <Flex justify={"space-between"} fontSize={"10px"}>
            <Text >{item.title}</Text>
            <Text>₹{item.price}</Text>
            <Text>{item.color}</Text>
            <Text>{item.size}</Text>
            </Flex>
        </Flex>
          )
        })}
    </DataWrapper>
    </div>
  )
}

const DataWrapper=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
justify-content:space-around;

width:80%;
margin:auto;
`;
export default SProductCard


