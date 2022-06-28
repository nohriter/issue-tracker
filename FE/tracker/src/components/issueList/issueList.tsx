// 기타 library
import axios from "axios";

// MUI
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { setInterval } from "timers/promises";

interface Data {
    title: string;
    issueData: string;
    writer: string;
    reviewer: string;
    issueId: number;
}

function createData(
    title: string,
    issueData: string,
    writer: string,
    reviewer: string,
    issueId: number
): Data {
    return { title, issueData, writer, reviewer, issueId };
}

function EnhancedTable() {
    const [rows, setRows] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [pageSize, setPageSize] = React.useState(0);
    const [totalPage, setTotalPage] = React.useState(0);

    const fetchData = () => {
        const request = axios
            .get(
                "https://313952d4-dd03-4472-a26f-e82b8c0038da.mock.pstmn.io/api/issues?page=1&status=OPEN"
            )
            .then((res: any) => {
                console.log("데이터받는중");
                setRows(res.data.issues);
                if (rows !== null) {
                    setIsLoading(true);
                    console.log(rows);
                }
            })
            .catch((error) => console.error(`Error: ${error}`));
    };

    React.useEffect(() => {
        if (isLoading === false) {
            fetchData();
            console.log("실행횟수점검");
        }
    });

    if (!isLoading) {
        return <div>Please wait some time...</div>;
    }

    if (isLoading) {
        return (
            <>
                <Container
                    component="main"
                    style={{
                        width: "3000px",
                        height: "2000px",
                        position: "absolute",
                        color: "#000000",
                    }}
                >
                    <TableContainer
                        component={Paper}
                        sx={{
                            maxWidth: 600,
                            minHeight: 300,
                            marginTop: 5,
                            marginLeft: 15,
                        }}
                    >
                        <Box display="flex" alignItems="center">
                            <Typography
                                marginLeft="10px"
                                sx={{ fontSize: "55px", fontWeight: "600" }}
                            >
                                Issue List
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    marginLeft: "170px",
                                    marginRight: "10px",
                                    color: "#000000",
                                    borderColor: "#000000",
                                    fontSize: "12px",
                                }}
                            >
                                필터
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    marginRight: "20px",
                                    color: "#000000",
                                    borderColor: "#000000",
                                    fontSize: "12px",
                                }}
                            >
                                작성
                            </Button>
                        </Box>

                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        이슈
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        작성날짜
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        작성자
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        담당자
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.issueId}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                            fontSize: "10px",
                                        }}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            1{/* {row.title} */}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            1
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            hi
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            hi
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </>
        );
    }
}

export default EnhancedTable;
