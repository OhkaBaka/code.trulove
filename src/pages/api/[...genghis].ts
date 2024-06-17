import type { NextApiRequest, NextApiResponse } from 'next'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
 
type ResponseData = {
  message: string
}
 
const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY as string,
  },
  region: 'us-west-2',
});
const docClient = DynamoDBDocumentClient.from(dbClient);

export const genghisPutPos = async (member: string, pos_x: number, pos_y: number, pos_z: number=0) => {
  const command = new UpdateCommand({
    TableName: 'genghis_multi_pos',
    Key: {
      member,
    },
    UpdateExpression: 'SET pos_x = :pos_x, pos_y = :pos_y, pos_z = :pos_z',
    ExpressionAttributeValues: {
      ":pos_x": pos_x,
      ":pos_y": pos_y,
      ":pos_z": pos_z
    },
    ReturnValues: "ALL_NEW",
   });

  try { 
     const response = await docClient.send(command);
     console.log(response);
     return response
  } catch (error) {
   throw error
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { genghis } = req.query;
  console.log(req.query);
  if(genghis && genghis.length){
    switch (genghis[1]) {
      case "pos":
        switch (genghis[2]) {
          case "update":
            if( parseInt(genghis[5]) && parseInt(genghis[6]) && parseInt(genghis[5])>=0 && parseInt(genghis[6])>=0 ){
              if( !parseInt(genghis[6]) ) genghis[5]=="0";
              genghisPutPos(genghis[3], parseInt(genghis[4]), parseInt(genghis[5]), parseInt(genghis[6]));
              res.end(`Genghis Update: ${genghis}`);
            }
            break;
        }
        break;
    }
  }
  res.end(`Genghis: ${genghis}`);
}