import * as React from "react";

// MUI Material
import { ThemeProvider } from "@mui/private-theming";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";

// MUI Theme
import { alpha } from "@mui/material/styles";
import { listTheme } from "../../mui-style/muiTheme";

import {
    Data,
    HeadCell,
    Order,
    EnhancedTableProps,
    EnhancedTableToolbarProps,
} from "./IssueLIst.types";

export const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected } = props;

    return (
        <ThemeProvider theme={listTheme}>
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                    ...(numSelected > 0 && {
                        bgcolor: (theme) =>
                            alpha(
                                theme.palette.primary.main,
                                theme.palette.action.activatedOpacity
                            ),
                    }),
                }}
            >
                {numSelected > 0 ? (
                    <Typography
                        sx={{ flex: "1 1 100%" }}
                        color="inherit"
                        variant="subtitle1"
                        component="div"
                    >
                        {numSelected} selected
                    </Typography>
                ) : (
                    <>
                        <Typography
                            color="inherit"
                            sx={{ flex: "1 1", fontWeight: 700 }}
                            variant="h5"
                            id="tableTitle"
                            component="div"
                        >
                            이슈리스트
                        </Typography>
                        <Button
                            color="inherit"
                            variant="outlined"
                            sx={{ marginRight: 1, width: 20, fontSize: "12px" }}
                        >
                            필터
                        </Button>
                        <Button
                            color="inherit"
                            variant="outlined"
                            sx={{ width: 20, fontSize: "12px" }}
                        >
                            작성
                        </Button>
                    </>
                )}
                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter list">
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
        </ThemeProvider>
    );
};
