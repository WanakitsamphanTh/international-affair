"use client";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import CloseButton from 'react-bootstrap/CloseButton';

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CountryData from "country-data";


export default function PopUp({ title, author, date, country, content, profile, visibleState, setVisibility }) {
    //const [isShown, setShow] = useState(true);

    const close = () => { setVisibility(!visibleState) };

    return (
        <Modal show={visibleState} size="lg" centered>
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
                    <div className="col-7 d-flex align-items-center">
                        <div>
                            <h2 className="fw-bold display-6">{title}</h2>
                            <h4 className="py-0 my-0 lead fst-italic">Author:</h4><p className="py-0 my-0 lead"> {author}</p>
                            <h4 className="py-0 my-0 lead fst-italic">From:</h4><p className="py-0 my-0 lead"> {CountryData.countries[country].name}</p>
                            <h4 className="py-0 my-0 lead fst-italic">Date:</h4><p className="py-0 my-0 lead "> {date}</p>
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
