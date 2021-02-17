import styled from "styled-components";

export const Container = styled.div`
	width: 100px;
	min-width: 100%;
  /* width: 500px; */
  font-family: sans-serif;
  border: 1px solid black;
  height: 150px;
  overflow: auto;
  direction: rtl;
  ::-webkit-scrollbar {
    display: block;
    width: 10px;
    height: 10px;
  }
	/* transform: rotate(180deg); */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border-radius: 5px;
    height: 5px;
    width: 5px;
  }
  ::-webkit-scrollbar-track-piece:end {
    background: #f5f5f5;
  }

  ::-webkit-scrollbar-track-piece:start {
    background: #f5f5f5;
    margin-top: 30px;
    margin-left: 110px;
  }
  table {
    width: 100%;
    margin: 0;
    table-layout: fixed;
    border-spacing: 0px;
    padding: 0;
    thead {
			text-align:center;
      border-spacing: 0px;
      tr {
        background: gray;
        color: #fff;
        th:last-child {
          position: sticky;
          left: 0;
          z-index: 2;
          width: 100px;
        }
        th {
          height: 20px;
          position: sticky;
          top: 0;
          z-index: 1;
          font-weight: 400;
          padding: 5px;
          background: gray;
          width: 150px;
          border: 0.5px solid #d5d5d5;
        }
      }
    }
    tbody {
			tr {
				color: #00994D !important;
				:nth-child(even) {
					background: #F0F0F0 !important;
					background-color: #F0F0F0 !important;
					td {
						background: #F0F0F0 !important;
					}
				}
				:nth-child(odd) {
					background: #FFFFFF !important;
					background-color: #FFFFFF !important;
					td {
						background: #FFFFFF !important;
					}
				}
			}
      border-spacing: 0px;
      td {
        :last-child {
          position: sticky;
          z-index: 1;
          left: 0;
          background: white;
					/* text-align:center; */
        }
        overflow: hidden;
        text-align: center;
        border: 0.5px solid #d5d5d5;
      }
    }
  }
`;
