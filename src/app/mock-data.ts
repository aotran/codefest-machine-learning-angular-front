import { DataPoint } from "src/datapoint";

export const DATA: DataPoint[] = [
  {time: 503.0, V1: 0.0747375945, V2: -3.0320088526, V3: -0.4299191902, V4: -0.4427211554, V5: -1.7847104579, V6: -0.0666682907, V7: 0.0987355744, V8: -0.2225249679, V9: -0.2418575194, V10: 0.1586638927, V11: -1.5392916736, V12: -0.4964665411, V13: 0.0664942763, V14: -0.0942487144, V15: 0.5950023237, V16: -1.0329006349, V17: -0.0772876626, V18: 1.31801278, V19: -0.3909271928, V20: 0.9678686614, V21: -0.0789272087, V22: -1.2472417073, V23: -0.6204017526, V24: -0.3685448487, V25: -0.0733586127, V26: 1.296834824, V27: -0.1927596811, V28: 0.1214402647, amount: 712.82, fraudClass: false},
  {time: 1001.0, V1: -0.6769908959, V2: 1.2016834546, V3: 1.5944767939, V4: -0.0034371342, V5: -0.2691850081, V6: -1.1135402245, V7: 0.6880849422, V8: -0.0740975638, V9: -0.2146807267, V10: -0.0001551134, V11: -0.0952284333, V12: 0.0330933647, V13: -0.0923705635, V14: 0.1048146241, V15: 0.8483401916, V16: 0.0865294804, V17: -0.2795451127, V18: -0.4677517125, V19: -0.1378753827, V20: 0.2029988837, V21: -0.2397238026, V22: -0.56306139, V23: 0.0240605683, V24: 0.6877439623, V25: -0.189759346, V26: 0.0561535027, V27: 0.3772420122, V28: 0.1815333458, amount: 4.95, fraudClass: false},
  {time: 472.0, V1: -3.043540624, V2: -3.1573071209, V3: 1.08846278, V4: 2.2886436184, V5: 1.3598051297, V6: -1.064822523, V7: 0.3255742662, V8: -0.0677936532, V9: -0.2709528362, V10: -0.8385865646, V11: -0.4145754483, V12: -0.5031408596, V13: 0.6765015446, V14: -1.6920289331, V15: 2.0006348391, V16: 0.6667796959, V17: 0.5997174138, V18: 1.7253210075, V19: 0.2833448301, V20: 2.1023387926, V21: 0.6616959248, V22: 0.435477209, V23: 1.3759657425, V24: -0.2938031527, V25: 0.2797980318, V26: -0.1453617148, V27: -0.2527731225, V28: 0.0357642252, amount: 529.0, fraudClass: true},
  {time: 7519.0, V1: 1.2342350461, V2: 3.0197404207, V3: -4.3045968848, V4: 4.7327951304, V5: 3.6242008306, V6: -1.3577456632, V7: 1.7134449879, V8: -0.4963584871, V9: -1.2828578204, V10: -2.4474692551, V11: 2.101343865, V12: -4.6096283906, V13: 1.4643776248, V14: -6.0793371931, V15: -0.3392373727, V16: 2.5818509538, V17: 6.7393843848, V18: 3.0424931783, V19: -2.7218531222, V20: 0.0090608364, V21: -0.3790683071, V22: -0.7041810322, V23: -0.6568047563, V24: -1.6326529569, V25: 1.4889014484, V26: 0.5667972735, V27: -0.0100162235, V28: 0.1467927349, amount: 1.0, fraudClass: true}
  ];

/* Cell labels
  Index(['Time', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10',
       'V11', 'V12', 'V13', 'V14', 'V15', 'V16', 'V17', 'V18', 'V19', 'V20',
       'V21', 'V22', 'V23', 'V24', 'V25', 'V26', 'V27', 'V28', 'Amount',
       'Class'],
      dtype='object')
*/

/* 2 non-fraud datapoints
    0	501.0	-1.377718	1.354530	0.543183	-1.427171	-0.124389	-0.524309	0.179124	0.616512	...	-0.180028	0.008982	-0.075797	-0.057756	-0.388366	-0.296798	0.774677	-0.418797	-0.184978	3.00
    0	503.0	0.074738	-3.032009	-0.429919	-0.442721	-1.784710	-0.066668	0.098736	-0.222525	...	0.967869	-0.078927	-1.247242	-0.620402	-0.368545	-0.073359	1.296835	-0.192760	0.121440	712.82
*/
/* 2 fraudulent datapoints
    1	472.0	-3.043541	-3.157307	1.088463	2.288644	1.359805	-1.064823	0.325574	-0.067794	...	2.102339	0.661696	0.435477	1.375966	-0.293803	0.279798	-0.145362	-0.252773	0.035764	529.00
    1	7519.0	1.234235	3.019740	-4.304597	4.732795	3.624201	-1.357746	1.713445	-0.496358	...	0.009061	-0.379068	-0.704181	-0.656805	-1.632653	1.488901	0.566797	-0.010016	0.146793	1.00
*/