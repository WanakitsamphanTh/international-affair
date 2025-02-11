"use client";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import CloseButton from 'react-bootstrap/CloseButton';

import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CountryDataJP = {
    "TH": "タイ",
    "FR": "フランス",
    "FI": "フィンランド",
    "TW": "台湾",
    "KR": "韓国",
    "DE": "ドイツ",
    "KZ": "カザフスタン"
};

export default function PopUp({ title, author, date, country, content, profile, visibleState, setVisibility }) {
    //const [isShown, setShow] = useState(true);

    const close = () => { setVisibility(!visibleState) };

    return (
        <Modal show={visibleState} size="lg" backdrop="static" centered>
            <div className="row justify-content-end px-4 py-2">
                <CloseButton onClick={close} ></CloseButton>
            </div>
            <ModalHeader>
                <div className="row">
                    <div className="col-5 d-flex align-items-center justify-content-center ">
                        <img src={profile} className="object-fit-cover border rounded-circle " style={{
                            width: "70%",
                            minWidth: "7em",
                            minHeight: "7em",
                            aspectRatio: "1 / 1"
                        }} />
                    </div>
                    <div className="col-7 d-flex align-items-center ">
                        <div>
                            <h2 className="fw-bold display-6">{title}</h2>
                            <h5 className="py-0 my-0  fst-italic">著者:</h5><p className="py-0 my-0 "> {author}</p>
                            <h5 className="py-0 my-0  fst-italic">研修先:</h5><p className="py-0 my-0 "> {CountryDataJP[country]}</p>
                            <h5 className="py-0 my-0  fst-italic">日付:</h5><p className="py-0 my-0  "> {date}</p>
                        </div>
                    </div>
                </div>
            </ModalHeader>
            <ModalBody>
                {content.split('\n').map((line, index) => (
                    <p key={index} className="fw-light" style={{ textAlign: "justify", paddingLeft: "1em", paddingRight: "1em" }}>
                        {line}
                    </p>
                ))}
            </ModalBody>
        </Modal>
    );
}
