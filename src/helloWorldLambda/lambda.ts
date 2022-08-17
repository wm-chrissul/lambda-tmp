import {
    // APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";

import { getFileData } from './helloworld'

export const lambdaHandler = async (): Promise<APIGatewayProxyResult> => {

    const fileData = getFileData();

    return {
        statusCode: 200,
        isBase64Encoded: true,
        headers: {
            "Content-type": "application/pdf"
        },
        body: fileData.toString('base64')
    }
}

