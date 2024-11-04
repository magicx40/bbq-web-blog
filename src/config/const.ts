export const questions = [
    {
        id: 1,
        title: '【经典真题】（2022·国家）',
        question:
            '高校某专业70多名毕业生中，有96%在毕业后去西部省区支援国家建设，其中去偏远中小学支教的毕业生占该专业毕业生总数的20%，比任职大学生村官的毕业生少2人，比在西部地区参军入伍的毕业生多1人，其余的毕业生选择去国有企业西部边远岗位工作。问：去国有企业西部边远岗位工作的毕业生有多少人？',
        answer: [
            {
                id: 'A',
                text: 'A. 23人',
            },
            {
                id: 'B',
                text: 'B. 26人',
            },
            {
                id: 'C',
                text: 'C. 29人',
            },
            {
                id: 'D',
                text: 'D. 32人',
            },
        ],
        explanation: [
            '根据“有96%在毕业后去西部省区支援国家建设”，可得{{ \\frac{ \\text{去西部省区支援国家建设的人数} }{ \\text{毕业生总人数} } }}=96%={{ \\frac{24}{25} }}，由于人数均为整数，则毕业生总人数应为25的整数倍。且毕业生有70多名，则毕业生总共有75人，去西部省区支援国家建设的毕业生有{{ 75*\\frac{24}{25}=72 }}人。',
            '其中，去偏远中小学支教的毕业生有{{ 75*20\\%=15 }}人，任职大学生村官的毕业生有{{ 15+2=17 }}人，在西部地区参军入伍的毕业生有{{ 15-1=14 }}人，则去国有企业西部边远岗位工作的毕业生有{{ 72-15-17-14=26 }}人。故本题选B。',
        ],
    },
    {
        id: 2,
        title: '【经典真题】（2019·国家）',
        question:
            'A和B两家企业2018年共申请专利300多项，其中A企业申请的专利中27%是发明专利，B企业申请的专利中，发明专利和非发明专利之比为8:13，已知B企业申请的专利数量少于A企业，但申请的发明专利数量多于A企业。问：两家企业总计最少申请非发明专利多少项？',
        answer: [
            {
                id: 'A',
                text: 'A. 237',
            },
            {
                id: 'B',
                text: 'B. 242',
            },
            {
                id: 'C',
                text: 'C. 250',
            },
            {
                id: 'D',
                text: 'D. 255',
            },
        ],
        explanation: [],
    },
];
