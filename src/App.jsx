import React from 'react';
import './index.css';
import {Anchor, Col, Flex, Row, Splitter, Typography} from 'antd';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';
import InternalContent from "./Navbars/InternalContent.jsx";

const Desc = ({children}) => (
    <Flex justify="center" align="center" style={{ height: '100%' }}>
        <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
            {children}
        </Typography.Title>
    </Flex>
);

const App = () => (
    <InternalContent format={{
        "title": "Military Intervention",
        "description": "By: luna, blake, and jackson",
        "sections": [
            {
                "title": "Essential Facts",
                "id": "Essential-Facts",
                "content":
                    <div>
                        <Typography>
                            Human Rights Violated
                        </Typography>
                        <ul>
                            <li>Article 1 - All humans are born equal</li>
                            <li>Article 2 - Everyone is entitled to these rights declared</li>
                            <li>Article 3- Everyone has the right to life</li>
                            <li>Article 5- No one shall be subjected to degrading treatment</li>
                            <li>Article 7- All are equal under the law, without discrimination</li>
                            <li>Article 25- Everyone has the right to adequate standard of life</li>
                        </ul>
                        <Divider/>
                        <Typography>
                            The Yugoslav Government led a campaign against millions of ethnic Albanians who were then forced
                            their homes and lives in Kosovo (pronounced KO-suh-vo) Tens of thousands murdered, many
                            fled but the UN was unable to do anything. The U.S attacked Yugoslav government to try to
                            prevent this human rights violation without
                            permission of the UN. Doing this would obviously violate many of the UN regulations. Although
                            the U.S was successful, many countries questioned the U.S's true intent for defending Kosovo,
                            leading to much controversy.
                        </Typography>
                    </div>
            },
            {
                "title": "State Sovereignty Questions",
                "id": "Sovereignty-Questions",
                "content":
                    <div>
                        <Typography>
                            Some states Like the U.S. believe that if states are killing their people, there should be an
                            opportunity for other states to interview and save those who are being killed. Other states like
                            China believe that there should not be an opportunity for that because it may do more harm than
                            good
                            and injecting yourself in a violent situation could hurt people on your end.<br/><Divider />
                        </Typography>
                        <Typography>
                            We collectively agreed that there should be a way for other states to intervene because the value of human life is much higher than the value of privacy.
                        </Typography>
                    </div>
            },
            {
                "title": "Pros + Cons",
                "id": "Pros-Cons",
                "content":
                    <div>
                        <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                            <Splitter.Panel defaultSize="50%" min="20%" max="80%">
                                <Desc>
                                    <h4>Pros:</h4>
                                    <ul>
                                        <li>We want the ability to save others</li>
                                        <li>As a world, we need to protect each-other</li>
                                    </ul>
                                </Desc>
                            </Splitter.Panel>
                            <Splitter.Panel>
                                <Desc>
                                    <h4>Cons:</h4>
                                    <ul>
                                        <li>This might do more bad than good</li>
                                        <li>Most times states do this for political influence</li>
                                    </ul>
                                </Desc>
                            </Splitter.Panel>
                        </Splitter>
                    </div>
            },
            {
                "title": "Current Event #1: Haiti",
                "id": "CE-Haiti",
                "content": <div>
                    <Typography>
                        In Haiti, the situation has been continually worsening. Joining a gang is the only way to make any money and keep afloat, and these gangs rule to country. Recently, the prime minister, Ariel Henry, has been unable to return to Haiti, as gangs have been shooting planes. These gangs want revolution and think the current government is completely incompetent. They have more resources and firepower than the Haitian police, who cannot do anything. Multiple countries, like Ecuador, the U.S, and Kenya have volunteered to assist the country with it's problem. The U.S is currently pushing the prime minister to resign, however this situation is still ongoing. Even after that, how will Haiti get to where its citizen no longer need to return to gang life, to get an education and a job that will keep that person stable. They need to reinstate a fair election, which hasn't happened in 8 years. They need to focus on human needs and right so that Haiti has a path to the future not littered with gang violence, human rights violations, and instability.
                    </Typography><br /><Divider />
                    <h4>
                        How does this connect?
                    </h4>
                    <Typography>
                        While there is no genocide taking place in Haiti, it is evident that there is a major lack of stability and a very dubious government not focused on its citizens. It's clear that the current prime minister, Ariel Henry is bad news. I believe that this event is evidence that countries should intervene in Haiti's current situation, and we do see intervention in the form of the UN permitting help from the U.S and other countries. Neither side in this conflict, the gangs and the government, are good; the government is corrupt and prevented its citizens from basic human rights, and while preventing that, committed many more, like kidnapping, murder, etc. However, it's clear that outside intervention is vital in this situation.
                    </Typography>
                </div>
            },
            {
                "title": "Current Event #2: Iran",
                "id": "CE-Iran",
                "content": <div>
                    <Typography>
                        Iran has had a huge influence in the middle east by helping neighboring countries with war. They have helped places such as sudan. the biggest way they assist is by sending drones and providing humanitarian aid. Their military assistance has even reached outside of the middle east like Russia. Many reasons have been posed as to why they might do this. Some say it is to help build their military more and to make progress on their geopolitical goals.
                    </Typography><br /><Divider />
                    <h4>
                        How does this connect to our central question?
                    </h4>
                    <Typography>
                        Iran has helped Sudan in its civil war and many other places. Our question asks if other countries aiding others in war is ok. Another point brought up in the article is why Iran does this. It was brought up that Iran does this for their own gain which is an argument against our consensus.
                    </Typography>
                </div>
            },
            {
                "title": "Current Event #3: Afghanistan",
                "id": "CE-Afghanistan",
                "content": <div>
                    <Typography>
                        Afghanistan's government under the Taliban has caused the quality of life to worsen, and Afghanistan has become a very dangerous place to live, with the highest civilian death rate in the world. This raises the question, should the international community intervene with the rampant human rights abuses in Afghanistan? We think the answer is yes. Although there must be clear limitations with the international communities actions, as shown with Haiti, the Afghanistan government is complicit in the human rights abuses, and nothing will change without international action within Afghanistan. Military intervention may not be the way though, according to Christopher Fitzgerald (a writer with e-international relations), the solution is the reintroduction of UN peacekeeping forces and NGO organizations to Afghanistan.
                    </Typography><br /><Divider />
                    <h4>
                        How does this connect to our central question.
                    </h4>
                    <Typography>
                        Afghanistan's government's situation is similar to Haiti, government intervention is needed, but military intervention will only make the situation worse. The ongoing need for peaceful intervention in Afghanistan will only become more urgent as feminist voices are silenced and oppression worsens.
                    </Typography>
                </div>
            },
            {
                "title": "Sources and Credit",
                "id": "Sources+Credit",
                "content": <div>
                    <ul>
                        <li><Typography>Essential Facts by: Blake</Typography></li>
                        <li><Typography>Sovereignty Questions by: Blake and Jackson</Typography></li>
                        <li><Typography>Pros and Cons by: Jackson</Typography></li>
                        <li><Typography>Current Event #1 by: Blake (and sourced from <a href="https://truthout.org/articles/what-haiti-needs-is-a-path-to-fair-elections-not-more-military-interventions/">Truthout</a>)</Typography></li>
                        <li><Typography>Current Event #2 by: Jackson (and sourced from <a href="https://theconversation.com/irans-intervention-in-sudans-civil-war-advances-its-geopolitical-goals-but-not-without-risks-229989">The Conversation</a>)</Typography></li>
                        <li><Typography>Current Event #3 by: Luna (and sourced from <a href="https://www.e-ir.info/2021/12/05/assessing-the-international-communitys-obligation-to-protect-the-human-rights-of-afghans/">E-International Relations</a>)</Typography></li>
                        <li><Typography>Website by: Luna</Typography></li>
                    </ul>
                </div>
            }
        ],
    }}/>
);

export default App;
