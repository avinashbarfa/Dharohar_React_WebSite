import {Box, Container, Typography, useMediaQuery} from "@mui/material";
import styled from "styled-components";
import {chiffonGorgetteItemData, khathanItemData, reshamMushriseItemData} from "../assest";
import {CustomImageList, SimpleMap} from "../components";
import {useEffect, useState} from "react";
import { ItemDataProps} from "../components/customImageList";

const catalogNameMap: SimpleMap<string> = {
    khathan: 'Khathan Silk Saree',
    Chiffon_Gorgette: 'Chiffon Gorgette Sarees',
    Resham_Mushrise: 'Resham Mushrise Sarees'
}

const catalogItemDataMap: SimpleMap<ItemDataProps[]> = {
    khathan: khathanItemData,
    Chiffon_Gorgette: chiffonGorgetteItemData,
    Resham_Mushrise: reshamMushriseItemData
}

interface CatalogSareeProps {
    catalogName: string;
    priceRange: string;
}


const CatalogSaree = ({catalogName, priceRange}: CatalogSareeProps) => {

    const [renderCatalogName, setCatalogName] = useState<string>('null');
    const [renderItemData, setRenderItemData] = useState<ItemDataProps[]>([]);
    const isMobile = useMediaQuery('(max-width:800px)');


    useEffect(() => {
        setCatalogName(catalogNameMap[catalogName]);
        setRenderItemData(catalogItemDataMap[catalogName]);
    }, [catalogName, priceRange])

    if (renderCatalogName.length <= 0 && renderItemData.length <= 0) return <></>;
    return (
        <SareeCatalogSection>
            <CatalogHeader>
                <StyledTypography variant={isMobile ? 'h6': 'h2'}>
                    {renderCatalogName} Catalog
                </StyledTypography>
                <StyledTypography variant="body1">
                    Price Range {priceRange}
                </StyledTypography>
            </CatalogHeader>
            <CustomImageList itemData={renderItemData}/>
        </SareeCatalogSection>
    );
}

export default CatalogSaree;

const SareeCatalogSection = styled(Container)`
  margin-top: 128px;
`;

const CatalogHeader = styled(Box)`
  padding: 0px 0px 48px 0px;
`;

const StyledTypography = styled(Typography)`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
`;
