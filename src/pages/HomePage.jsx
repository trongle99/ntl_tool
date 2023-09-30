import React, { useEffect, useState } from 'react';
import MainContent from './../components/MainContent';
import UAParser from 'ua-parser-js';

const HomePage = () => {
    const [deviceInfo, setDeviceInfo] = useState(null);

    useEffect(() => {
        const parser = new UAParser();
        const result = parser.getResult();
        setDeviceInfo(result);
    }, []);

    const [ipAddress, setIpAddress] = useState(null);
    const [ipLocalAddress, setIPLocalAddress] = useState('');

    function getLocalIP() {
        return new Promise(function (resolve, reject) {
            // NOTE: window.RTCPeerConnection is "not a constructor" in FF22/23
            var RTCPeerConnection =
                /*window.RTCPeerConnection ||*/ window.webkitRTCPeerConnection ||
                window.mozRTCPeerConnection;

            if (!RTCPeerConnection) {
                reject('Your browser does not support this API');
            }

            var rtc = new RTCPeerConnection({ iceServers: [] });
            var addrs = {};
            addrs['0.0.0.0'] = false;

            function grepSDP(sdp) {
                var hosts = [];
                var finalIP = '';
                sdp.split('\r\n').forEach(function (line) {
                    // c.f. http://tools.ietf.org/html/rfc4566#page-39
                    if (~line.indexOf('a=candidate')) {
                        // http://tools.ietf.org/html/rfc4566#section-5.13
                        var parts = line.split(' '), // http://tools.ietf.org/html/rfc5245#section-15.1
                            addr = parts[4],
                            type = parts[7];
                        if (type === 'host') {
                            finalIP = addr;
                        }
                    } else if (~line.indexOf('c=')) {
                        // http://tools.ietf.org/html/rfc4566#section-5.7
                        var parts = line.split(' '),
                            addr = parts[2];
                        finalIP = addr;
                    }
                });
                return finalIP;
            }

            if (1 || window.mozRTCPeerConnection) {
                // FF [and now Chrome!] needs a channel/stream to proceed
                rtc.createDataChannel('', { reliable: false });
            }

            rtc.onicecandidate = function (evt) {
                // convert the candidate to SDP so we can run it through our general parser
                // see https://twitter.com/lancestout/status/525796175425720320 for details
                if (evt.candidate) {
                    var addr = grepSDP('a=' + evt.candidate.candidate);
                    resolve(addr);
                }
            };
            rtc.createOffer(
                function (offerDesc) {
                    rtc.setLocalDescription(offerDesc);
                },
                function (e) {
                    console.warn('offer failed', e);
                },
            );
        });
    }

    useEffect(() => {
        getLocalIP().then((ipAddr) => {
            setIPLocalAddress(ipAddr);
        });

        fetch('https://api.ipify.org/?format=json')
            .then((response) => response.json())
            .then((data) => {
                setIpAddress(data.ip);
            })
            .catch((error) => {
                console.log('Lỗi khi lấy địa chỉ IP: ' + error);
            });
    }, []);

    return (
        <MainContent title={'Home page'}>
            <div className="flex justify-center">
                <p className="text-6xl">WELCOME TO NTL TOOL</p>
            </div>
            <div>
                <p>Địa chỉ IP của bạn là: {ipAddress}</p>
                <p>Your IP Local Address is: {ipLocalAddress}</p>
            </div>
            {deviceInfo && (
                <React.Fragment>
                    <p>User Agent: {deviceInfo.ua}</p>
                    <p>Device: {deviceInfo.device.model}</p>
                    <p>Operating System: {deviceInfo.os.name}</p>
                    <p>Browser: {deviceInfo.browser.name}</p>
                </React.Fragment>
            )}
        </MainContent>
    );
};

export default HomePage;
