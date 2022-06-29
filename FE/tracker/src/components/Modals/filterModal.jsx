import * as React from "react";

// MUI
import { TextField, Button, Box } from "@mui/material";

function FilterModal() {
    const [filterModal, setFilterModal] = React.useState(false);
    const modalClose = () => {
        setFilterModal(!filterModal);
    };

    return (
        <Box>
            <TextField />
            <Button>검색</Button>
            <Button onClick={modalClose}></Button>
        </Box>
    );
}

export default FilterModal;
