import { MindMapData } from "../../services/llmService";

export const BIOINFORMATICS_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "bio_root",
      "label": "Biotechnology, Computational Genomics & Bioinformatics from First Principles",
      "description": "Rigorous first-principles blueprint of Illumina NGS & Oxford Nanopore sequencing, Burrows-Wheeler Transform FM-Index alignment, AlphaFold3 Evoformer spatial attention, GATK variant calling, single-cell RNA-Seq, and CRISPR gene editing.",
      "type": "topic"
    },
    {
      "id": "bio_root_p1",
      "label": "DNA/RNA Sequencing & Quality Control",
      "description": "Illumina NGS sequencing by synthesis, Oxford Nanopore long reads, PacBio HiFi, FASTQ Phred quality scores (Q30), and adapter trimming.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1",
      "label": "Illumina Next-Generation Sequencing (NGS) Chemistry",
      "description": "High-throughput sequencing by synthesis using reversible dye terminators.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s1",
      "label": "Cluster Generation & Bridge Amplification (Illumina Flow Cells)",
      "description": "Amplifying single DNA library fragments into dense clonal clusters on glass flow cells.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s1_d1",
      "label": "Oligonucleotide Adapter Binding",
      "description": "Hybridizing P5 and P7 adapter sequences to complementary lawn oligos on flow cell surfaces.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s1_d2",
      "label": "Bridge PCR Isothermal Amplification",
      "description": "Forming physical DNA bridges to generate ~1,000 identical clonal copy clusters per spot.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s2",
      "label": "Reversible Terminator Fluorophore Sequencing Cycle",
      "description": "Iterative 4-step incorporation of fluorescently labeled 3'-blocked dNTPs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s2_d1",
      "label": "Fluorescent Base Incorporation & 4-Color Imaging",
      "description": "Exciting fluorophores with lasers to record base emissions (A, C, G, T) across flow cells.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s2_d2",
      "label": "Chemical Cleavage & 3'-OH Un-blocking",
      "description": "Cleaving fluorophores and 3'-blocking groups to prepare DNA clusters for next cycles.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s3",
      "label": "Paired-End Sequencing Strategy (R1 & R2 Reads)",
      "description": "Sequencing DNA fragments from both 5' and 3' ends to produce read pairs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s3_d1",
      "label": "Insert Size Length Distribution",
      "description": "Targeting specific fragment insert lengths (e.g. 350bp) between read pairs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s3_d2",
      "label": "Resolving Repetitive Genomic Regions",
      "description": "Utilizing paired-end distance constraints to map reads across repetitive genomic elements.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s4",
      "label": "Phaser & Pre-Phasing Signal Decay Errors",
      "description": "Loss of cluster signal synchronization caused by incomplete base incorporation or cleavage failures.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s4_d1",
      "label": "Phasing Signal Lag (Falling Behind)",
      "description": "Clusters where individual strands fail to incorporate bases in single cycles.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s4_d2",
      "label": "Pre-Phasing Signal Lead (Jumping Ahead)",
      "description": "Clusters incorporating un-blocked bases prematurely.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s5",
      "label": "Illumina Novaseq X Ultra-High Throughput Scaling",
      "description": "Generating terabytes of genomic data per flow cell run using patterned flow cells and microfluidic optics.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s5_d1",
      "label": "Patterned Nanowell Arrays",
      "description": "Ordering clusters in fixed spatial grids to eliminate overlap and increase density.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t1_s5_d2",
      "label": "2-Color & 1-Color Optical Base Calling",
      "description": "Accelerating sequencing speeds using simplified multi-channel optical sensors.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2",
      "label": "Oxford Nanopore & PacBio Long-Read Technologies",
      "description": "Single-molecule real-time (SMRT) and nanopore sequencing yielding 10kb-1Mb long reads.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s1",
      "label": "Oxford Nanopore Ionic Current Translocation Mechanics",
      "description": "Passing single-stranded DNA molecules through protein nanopores embedded in synthetic membranes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s1_d1",
      "label": "Protein Nanopore (CsgG / R10.4) Architecture",
      "description": "Guiding DNA strands through narrow constriction pores using motor enzymes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s1_d2",
      "label": "Ionic Current Shift Measurements (picoAmperes)",
      "description": "Measuring minute electrical current disruptions caused by k-mer base combinations occupying pores.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s2",
      "label": "Basecalling Neural Networks (Bonito / Dorado CRF Models)",
      "description": "Decoding continuous ionic current signals into DNA nucleotide sequences using Connectionist Temporal Classification (CTC) neural networks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s2_d1",
      "label": "Convolutional & Recurrent Neural Network Signal Decoding",
      "description": "Translating noisy 4kHz raw current signals into base calls.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s2_d2",
      "label": "Direct Epigenetic DNA Methylation Detection (5mC, 6mA)",
      "description": "Detecting modified bases directly from raw current signal shifts without chemical bisulfite conversion.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s3",
      "label": "PacBio SMRT Sequencing & Zero-Mode Waveguides (ZMW)",
      "description": "Observing single DNA polymerase enzymes synthesizing DNA in real time inside microscopic optical wells.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s3_d1",
      "label": "Zero-Mode Waveguide Volume Attenuation",
      "description": "Restricting laser illumination volumes to zeptoliters (10^-21 L) to observe individual fluorescent dNTP incorporations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s3_d2",
      "label": "Circular Consensus Sequencing (CCS / PacBio HiFi Reads)",
      "description": "Sequencing circularized DNA molecules repeatedly to generate Q30 (>99.9%) accurate long reads.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s4",
      "label": "Long-Read Advantages for Structural Variant & De Novo Assembly",
      "description": "Overcoming short-read limitations in complex genomic regions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s4_d1",
      "label": "Spanning Full Transposable Elements & Tandem Repeats",
      "description": "Mapping reads seamlessly across multi-kilobase repetitive regions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s4_d2",
      "label": "Phasing Haplotypes across Chromosomal Distances",
      "description": "Reconstructing maternal and paternal chromosome haplotypes over megabase distances.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s5",
      "label": "Nanopore Duplex Read Architecture (Direct Both-Strand Sequencing)",
      "description": "Sequencing template and complementary DNA strands sequentially through single nanopores.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s5_d1",
      "label": "Duplex Adapter Hairpin Connection",
      "description": "Tethering double-stranded DNA ends to sequence both strands consecutively.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t2_s5_d2",
      "label": "Q30+ Accuracy Long-Read Generation",
      "description": "Combining two strand calls to achieve short-read equivalent accuracy on long reads.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3",
      "label": "FASTQ Data Format & Phred Quality Scores (Q-Scores)",
      "description": "Standard text file format storing raw sequencing reads and base quality scores.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s1",
      "label": "FASTQ 4-Line Read Structure",
      "description": "Standardized 4-line text representation for every sequencing read.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s1_d1",
      "label": "Line 1 (@Header Identifier & Instrument Metadata)",
      "description": "Encoding flow cell ID, lane, tile, coordinates, and read index numbers.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s1_d2",
      "label": "Line 2 (Nucleotide Sequence String A, C, G, T, N)",
      "description": "Raw base calls emitted by basecaller software.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s1_d3",
      "label": "Line 3 (+ Optional Header Repeat)",
      "description": "Separator character marking start of quality scores.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s1_d4",
      "label": "Line 4 (ASCII Quality Score Encoding)",
      "description": "Encoding Phred quality scores as single ASCII characters.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s2",
      "label": "Phred Quality Score Formula (Q = -10 * log10(P_error))",
      "description": "Logarithmic probability metric measuring base call error likelihood.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s2_d1",
      "label": "Q10 Score (10% Error Probability, 90% Accuracy)",
      "description": "Low quality base call threshold.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s2_d2",
      "label": "Q20 Score (1% Error Probability, 99% Accuracy)",
      "description": "Standard benchmark quality threshold.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s2_d3",
      "label": "Q30 Score (0.1% Error Probability, 99.9% Accuracy)",
      "description": "Gold-standard benchmark accuracy for high-confidence variant calling.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s3",
      "label": "ASCII Sanger Phred+33 Quality Encoding",
      "description": "Mapping numerical Q-scores (0-93) to ASCII characters by adding offset 33.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s3_d1",
      "label": "ASCII Character Range ('!' = Q0 to '~' = Q93)",
      "description": "Storing quality scores compactly as single bytes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s3_d2",
      "label": "Phred+33 vs Legacy Phred+64 Compatibility",
      "description": "Handling legacy Illumina 1.3+ quality score offset formats.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s4",
      "label": "FastQC Quality Control Metrics",
      "description": "Evaluating raw FASTQ data quality prior to downstream alignment.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s4_d1",
      "label": "Per-Base Sequence Quality Distributions",
      "description": "Monitoring quality score drops toward 3' read ends.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s4_d2",
      "label": "Per-Base Sequence Content & GC Bias",
      "description": "Detecting over-represented sequences and abnormal GC percentage distributions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s5",
      "label": "Adapter Trimming & Quality Filtering (fastp / Cutadapt)",
      "description": "Preprocessing FASTQ reads to remove sequencing adapters and low-quality bases.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s5_d1",
      "label": "Sliding Window Quality Trimming",
      "description": "Trimming 3' read ends when average quality inside sliding windows drops below Q20.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t3_s5_d2",
      "label": "Poly-G Tail Removal on 2-Color Illumina Systems",
      "description": "Trimming spurious poly-G tails produced when 2-color optics receive no signal.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4",
      "label": "Genomic Data Compression (BAM, CRAM & SAM Specs)",
      "description": "Formats for storing aligned sequencing reads against reference genomes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s1",
      "label": "SAM (Sequence Alignment/Map) Plain Text Format",
      "description": "Tab-delimited text format storing alignment coordinates, CIGAR strings, and flags.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s1_d1",
      "label": "SAM Mandatory Columns (QNAME, FLAG, RNAME, POS, MAPQ, CIGAR)",
      "description": "Storing 11 core alignment fields per read.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s1_d2",
      "label": "SAM Bitwise Flags (16 = Reverse Strand, 1024 = PCR Duplicate)",
      "description": "Encoding multi-attribute alignment properties into single bitwise integer flags.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s2",
      "label": "BAM Binary Compressed Alignment Format",
      "description": "BGZF (Blocked GNU Zip Format) compressed binary representation of SAM files.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s2_d1",
      "label": "BGZF Block Compression Architecture",
      "description": "Slicing files into independent 64KB gzip blocks to enable fast random access.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s2_d2",
      "label": "BAI Index File (.bai) Coordinate Lookup",
      "description": "Indexing BAM files via virtual file offsets for sub-millisecond region queries.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s3",
      "label": "CRAM Reference-Based Compression Format (GA4GH Standard)",
      "description": "Ultra-dense alignment format storing only differences relative to reference genomes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s3_d1",
      "label": "Reference Differential Storage",
      "description": "Omitting bases that match reference genomes exactly, storing only variant deltas.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s3_d2",
      "label": "50-80% File Size Reduction over BAM",
      "description": "Reducing storage footprint for petabyte-scale biobanks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s4",
      "label": "CIGAR (Concise Idiosyncratic Gapped Alignment Report) Strings",
      "description": "Compact string representation of alignment operations (Matches, Insertions, Deletions, Clips).",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s4_d1",
      "label": "CIGAR Operators (M = Match/Mismatch, I = Insertion, D = Deletion, S = Soft Clip)",
      "description": "Encoding alignment structures like 100M5I45M.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s4_d2",
      "label": "Soft-Clipping vs Hard-Clipping",
      "description": "Retaining un-aligned read ends in sequence strings (Soft) vs stripping sequence strings (Hard).",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s5",
      "label": "htslib C Library (samtools / bcftools)",
      "description": "High-performance C library powering genomic data processing tools.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s5_d1",
      "label": "Multithreaded BGZF Decompression Pipelines",
      "description": "Parallelizing BAM/CRAM file I/O across multi-core CPU pipelines.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t4_s5_d2",
      "label": "API Standard for Computational Genomics",
      "description": "Underpinning all major bioinformatics alignment and variant calling software.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5",
      "description": "Detailed first-principles mechanics for DNA/RNA Sequencing & Quality Control topic 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for DNA/RNA Sequencing & Quality Control Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s1_d1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s1_d2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for DNA/RNA Sequencing & Quality Control Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s2_d1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s2_d2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s3",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for DNA/RNA Sequencing & Quality Control Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s3_d1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s3_d2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s4",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for DNA/RNA Sequencing & Quality Control Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s4_d1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s4_d2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s5",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for DNA/RNA Sequencing & Quality Control Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s5_d1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t5_s5_d2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6",
      "description": "Detailed first-principles mechanics for DNA/RNA Sequencing & Quality Control topic 6.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for DNA/RNA Sequencing & Quality Control Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s1_d1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s1_d2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for DNA/RNA Sequencing & Quality Control Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s2_d1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s2_d2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s3",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for DNA/RNA Sequencing & Quality Control Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s3_d1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s3_d2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s4",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for DNA/RNA Sequencing & Quality Control Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s4_d1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s4_d2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s5",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for DNA/RNA Sequencing & Quality Control Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s5_d1",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p1_t6_s5_d2",
      "label": "DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for DNA/RNA Sequencing & Quality Control Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2",
      "label": "Sequence Alignment & Assembly Algorithms",
      "description": "Dynamic programming (Smith-Waterman / Needleman-Wunsch), Burrows-Wheeler Transform (BWT), FM-Index, and De Bruijn graphs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1",
      "label": "Global & Local Dynamic Programming Alignment",
      "description": "Exact pairwise sequence alignment algorithms finding optimal matches.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s1",
      "label": "Needleman-Wunsch Global Alignment Algorithm",
      "description": "Dynamic programming matrix filling algorithm aligning two full sequences from end to end.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s1_d1",
      "label": "Scoring Matrix Recurrence (F(i,j) = Max(F(i-1,j-1)+match, F(i-1,j)+gap, F(i,j-1)+gap))",
      "description": "Filling O(N*M) dynamic programming score tables.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s1_d2",
      "label": "Traceback Matrix Path Reconstruction",
      "description": "Tracing backward from bottom-right corner to reconstruct optimal global alignment.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s2",
      "label": "Smith-Waterman Local Alignment Algorithm",
      "description": "Modifying Needleman-Wunsch to find optimal local matching sub-segments within sequences.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s2_d1",
      "label": "Zero Floor Score Bound (Max(0, ...))",
      "description": "Resetting negative matrix scores to zero to allow local alignment restarts.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s2_d2",
      "label": "Traceback from Maximum Score Matrix Entry",
      "description": "Starting traceback from highest score cell in full matrix down to zero score cell.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s3",
      "label": "Gotoh Affine Gap Penalty Model (Gap Open vs Gap Extension)",
      "description": "Distinguishing cost of initiating a gap from cost of extending an existing gap.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s3_d1",
      "label": "Affine Gap Cost Formula (w(k) = gamma + delta * k)",
      "description": "Penalizing gap opening (gamma) heavily while setting lower extension costs (delta).",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s3_d2",
      "label": "3-Matrix Dynamic Programming State Architecture",
      "description": "Maintaining separate matrices for insertion, deletion, and match states.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s4",
      "label": "Substitution Matrices (BLOSUM62 / PAM250)",
      "description": "Empirical scoring matrices quantifying evolutionary likelihood of amino acid substitutions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s4_d1",
      "label": "BLOSUM62 Log-Odds Likelihood Ratios",
      "description": "Scoring amino acid substitutions based on observed conservation ratios in protein families.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s4_d2",
      "label": "Positive Scores for Conservative Substitutions",
      "description": "Rewarding chemically similar amino acid swaps (e.g. Lysine to Arginine).",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s5",
      "label": "SIMD Parallelization of Alignment Matrices (Parasail / Striped SW)",
      "description": "Accelerating dynamic programming matrix calculations using CPU SIMD vector instructions (AVX-512).",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s5_d1",
      "label": "Farrar's Striped Vector Layout",
      "description": "Interleaving matrix calculation vectors to match SIMD register widths.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t1_s5_d2",
      "label": "10-100x Speedup over Scalar Alignment",
      "description": "Aligning millions of short read sequences per second.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2",
      "label": "Burrows-Wheeler Transform (BWT) & FM-Index Alignment",
      "description": "Indexing reference genomes into compact data structures for sub-second short-read mapping.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s1",
      "label": "Burrows-Wheeler Transform (BWT) String Permutation",
      "description": "Reversible permutation of string characters that groups identical characters together.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s1_d1",
      "label": "Suffix Array Sorting & Last Column Extraction",
      "description": "Sorting all cyclic rotations of a string and extracting the final column.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s1_d2",
      "label": "Run-Length Encoding (RLE) Compression Advantage",
      "description": "Transforming text to create long repeated character runs ideal for compression.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s2",
      "label": "LF-Mapping Property (Last-to-First Column Mapping)",
      "description": "Fundamental BWT property where the i-th occurrence of character C in the last column corresponds to the i-th occurrence of C in the first column.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s2_d1",
      "label": "Exact Backward Search Traversal",
      "description": "Traversing query sequence backwards character by character through BWT strings.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s2_d2",
      "label": "O(P) Exact Match Lookup Time",
      "description": "Matching query pattern of length P in O(P) time independent of reference genome size.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s3",
      "label": "FM-Index (BWT + Count Array + Suffix Array Samples)",
      "description": "Self-indexing data structure combining BWT with auxiliary lookup tables.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s3_d1",
      "label": "C[a] Array (Count of Lexicographically Preceding Characters)",
      "description": "Storing total count of characters strictly smaller than character a.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s3_d2",
      "label": "Occ(a, k) Rank Dictionary (Occurrence Count of Character a in BWT[0..k])",
      "description": "Computing rank queries in O(1) time using sampled wavelet trees or bit-vectors.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s4",
      "label": "BWA-MEM & Bowtie2 Short-Read Aligners",
      "description": "Production read mappers using FM-Index lookup to align short reads to reference genomes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s4_d1",
      "label": "Maximal Exact Match (MEM) Seed Discovery",
      "description": "Finding longest exact matching seeds using FM-Index before extending via Smith-Waterman.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s4_d2",
      "label": "Handling Seed Mismatches & Indels",
      "description": "Backtracking through FM-Index state space to permit small mismatches and indels.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s5",
      "label": "Memory Footprint Efficiency (Human Genome FM-Index ~ 4GB RAM)",
      "description": "Compressing the 3-billion-base human genome index to fit inside standard desktop RAM.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s5_d1",
      "label": "In-Memory Whole-Genome Search",
      "description": "Loading full human reference indexes into 4GB RAM.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t2_s5_d2",
      "label": "Sub-Millisecond Read Mapping Speed",
      "description": "Mapping thousands of NGS reads per second per CPU core.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3",
      "label": "De Bruijn Graph De Novo Genome Assembly",
      "description": "Reconstructing novel genomes without reference sequences using k-mer overlap graphs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s1",
      "label": "k-mer Counting & Substring Decomposition",
      "description": "Slicing raw sequencing reads into overlapping substrings of fixed length k.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s1_d1",
      "label": "k-mer Length Trade-offs (e.g. k = 31 vs k = 127)",
      "description": "Balancing graph connectivity (small k) against repeat resolution (large k).",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s1_d2",
      "label": "KMC / Jellyfish Fast k-mer Counting",
      "description": "Counting billions of k-mers across raw FASTQ files using lock-free hash tables.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s2",
      "label": "De Bruijn Graph Nodes & Edges Topology",
      "description": "Graph where nodes represent (k-1)-mers and directed edges represent k-mers.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s2_d1",
      "label": "Directed Edge Overlap Rule",
      "description": "Connecting prefix (k-1)-mer nodes to suffix (k-1)-mer nodes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s2_d2",
      "label": "Eulerian Path Representation",
      "description": "Formulating genome assembly as finding Eulerian paths that visit every graph edge exactly once.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s3",
      "label": "Graph Error Correction & Topological Cleaning",
      "description": "Removing sequencing errors from De Bruijn graphs prior to path traversal.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s3_d1",
      "label": "Dead-End Tip Removal",
      "description": "Pruning short dead-end paths caused by sequencing errors near read ends.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s3_d2",
      "label": "Bubble Collapse (Heterozygous / Error Variant Merging)",
      "description": "Merging parallel graph paths caused by single-base substitution errors or heterozygous alleles.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s4",
      "label": "Contig Assembly & Scaffolding (SPAdes / MEGAHIT)",
      "description": "Extracting unambiguous linear sequence paths (contigs) from De Bruijn graphs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s4_d1",
      "label": "Non-Branching Path Contig Traversal",
      "description": "Emitting continuous contig sequences along non-branching graph paths.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s4_d2",
      "label": "Paired-End Read Scaffolding",
      "description": "Utilizing paired-end read orientation to bridge gaps between isolated contigs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s5",
      "label": "Hybrid Assembly (Combining Short + Long Reads)",
      "description": "Combining accurate short Illumina reads with long Nanopore/PacBio reads for complete genome assembly.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s5_d1",
      "label": "Unambiguous Resolution of Complex Repeat Structures",
      "description": "Using long reads to resolve graph branching nodes caused by repetitive elements.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t3_s5_d2",
      "label": "Telomere-to-Telomere (T2T) Complete Chromosome Assembly",
      "description": "Assembling gapless human chromosomes from end to end.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4",
      "label": "Minimap2 & Seed-Hamming-Chaining Long-Read Alignment",
      "description": "State-of-the-art aligner designed for high-error long reads and full-genome comparisons.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s1",
      "label": "Minimizer Sketch Generation (w, k Minimizers)",
      "description": "Selecting representative k-mers (minimizers) within sliding windows of size w to compress sequence representations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s1_d1",
      "label": "Lexicographically Smallest k-mer Selection",
      "description": "Hashing k-mers inside window w and keeping the minimum hash value.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s1_d2",
      "label": "10-100x Index Compression",
      "description": "Storing sparse minimizer sketches instead of dense k-mer tables.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s2",
      "label": "Seed Matching & Index Hash Table Lookup",
      "description": "Finding matching minimizer seeds between query reads and reference target sequences.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s2_d1",
      "label": "Multi-Map Minimizer Index Search",
      "description": "Locating shared minimizer anchors across reference sequences.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s2_d2",
      "label": "High Error Tolerance (Tolerating 10-15% Read Error Rates)",
      "description": "Anchoring alignments despite high sequencing error rates.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s3",
      "label": "Dynamic Programming Colinear Chaining",
      "description": "Chaining sorted minimizer seeds into co-linear alignment chains using dynamic programming.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s3_d1",
      "label": "Gap Penalty Chaining Score Optimization",
      "description": "Maximizing seed match scores while penalizing spatial distance gaps between seeds.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s3_d2",
      "label": "Quadratic-Time Chaining Solvers",
      "description": "Chaining thousands of seeds in sub-milliseconds.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s4",
      "label": "Adaptive Banded Dynamic Programming Extension",
      "description": "Executing DP alignment strictly within narrow bands surrounding anchored seed chains.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s4_d1",
      "label": "Suzuki-Kasahara Banded Extension Algorithm",
      "description": "Filling dynamic programming matrices only along high-confidence seed paths.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s4_d2",
      "label": "Extreme Speed Advantage for Long Reads (100kb+)",
      "description": "Aligning ultra-long reads in milliseconds.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s5",
      "label": "Splice-Aware mRNA Alignment (Minimap2 -x splice)",
      "description": "Aligning RNA-Seq transcripts across large genomic intron gaps.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s5_d1",
      "label": "Canonical GT-AG Splice Junction Penalty Models",
      "description": "Rewarding alignments that break precisely at canonical donor/acceptor splice sites.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t4_s5_d2",
      "label": "Full Isoform Transcript Mapping",
      "description": "Mapping full-length cDNA reads across multi-kilobase intron deletions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5",
      "description": "Detailed first-principles mechanics for Sequence Alignment & Assembly Algorithms topic 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Sequence Alignment & Assembly Algorithms Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s1_d1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s1_d2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Sequence Alignment & Assembly Algorithms Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s2_d1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s2_d2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s3",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Sequence Alignment & Assembly Algorithms Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s3_d1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s3_d2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s4",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Sequence Alignment & Assembly Algorithms Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s4_d1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s4_d2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s5",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Sequence Alignment & Assembly Algorithms Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s5_d1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t5_s5_d2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6",
      "description": "Detailed first-principles mechanics for Sequence Alignment & Assembly Algorithms topic 6.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Sequence Alignment & Assembly Algorithms Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s1_d1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s1_d2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Sequence Alignment & Assembly Algorithms Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s2_d1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s2_d2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s3",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Sequence Alignment & Assembly Algorithms Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s3_d1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s3_d2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s4",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Sequence Alignment & Assembly Algorithms Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s4_d1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s4_d2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s5",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Sequence Alignment & Assembly Algorithms Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s5_d1",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p2_t6_s5_d2",
      "label": "Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sequence Alignment & Assembly Algorithms Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3",
      "label": "Structural Bioinformatics & Protein Folding",
      "description": "AlphaFold2/3 Evoformer spatial attention, PDB structures, Molecular Dynamics (GROMACS/AMBER), and Ramachandran plots.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1",
      "label": "Protein Primary, Secondary, Tertiary & Quaternary Structure",
      "description": "Four hierarchical levels of protein structural organization.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s1",
      "label": "Peptide Bond Geometry & Planar Constraints",
      "description": "Rigid planar partial double-bond character of peptide bonds linking amino acids.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s1_d1",
      "label": "Trans vs Cis Peptide Bond Conformations",
      "description": "Enforcing trans conformations (>99.5% occurrence) due to steric hindrance.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s1_d2",
      "label": "Backbone Dihedral Torsion Angles (Phi, Psi, Omega)",
      "description": "Defining backbone conformations via Phi (N-Calpha) and Psi (Calpha-C) rotation angles.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s2",
      "label": "Ramachandran Plot Allowed Conformation Regions",
      "description": "2D plot of Phi vs Psi angles illustrating sterically favorable backbone conformations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s2_d1",
      "label": "Alpha-Helix Region (Phi ~ -57deg, Psi ~ -47deg)",
      "description": "Clustering right-handed alpha-helical backbone conformations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s2_d2",
      "label": "Beta-Sheet Region (Phi ~ -119deg, Psi ~ +113deg)",
      "description": "Clustering extended beta-strand conformations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s2_d3",
      "label": "Glycine & Proline Structural Outliers",
      "description": "Glycine flexibility vs Proline rigid cyclic constraints.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s3",
      "label": "Secondary Structure Elements (Alpha-Helices & Beta-Sheets)",
      "description": "Regular local hydrogen-bonded patterns in polypeptide backbones.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s3_d1",
      "label": "Alpha-Helix i+4 Hydrogen Bonding Pattern",
      "description": "Stabilizing helices via backbone C=O(i) to N-H(i+4) hydrogen bonds.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s3_d2",
      "label": "Parallel vs Anti-Parallel Beta-Sheet Topology",
      "description": "Structuring inter-strand hydrogen bond networks across adjacent beta-strands.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s4",
      "label": "Tertiary & Quaternary 3D Assembly",
      "description": "Folding single polypeptide chains (Tertiary) and multi-subunit complexes (Quaternary).",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s4_d1",
      "label": "Hydrophobic Core Collapse Driving Force",
      "description": "Burying non-polar sidechains (Leucine, Valine) inside cores to minimize water entropy loss.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s4_d2",
      "label": "Disulfide Bridges (Cysteine-Cysteine Covalent Bonds)",
      "description": "Covalently locking 3D protein structures via S-S crosslinks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s5",
      "label": "Protein Data Bank (PDB / mmCIF) File Structures",
      "description": "Standardized 3D atomic coordinate file formats.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s5_d1",
      "label": "PDB ATOM Line Coordinates (x, y, z, Occupancy, B-Factor)",
      "description": "Storing 3D Cartesian coordinates and temperature B-factors per atom.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t1_s5_d2",
      "label": "mmCIF (Macromolecular Crystallographic Information File)",
      "description": "Modern STAR-based format supporting massive multi-million atom complexes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2",
      "label": "AlphaFold2 & AlphaFold3 Architecture (DeepMind)",
      "description": "Deep learning systems predicting 3D protein structures from primary amino acid sequences with atomic accuracy.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s1",
      "label": "Multiple Sequence Alignment (MSA) Feature Extraction",
      "description": "Querying evolutionary databases (UniRef / BFD) to build MSA representations tracking co-evolving residues.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s1_d1",
      "label": "Co-Evolutionary Signal Detection",
      "description": "Detecting correlated residue mutations across evolution that indicate physical 3D contact.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s1_d2",
      "label": "MSA Representation Matrix (N_seq x N_res x C_msa)",
      "description": "Encoding amino acid identities and conservation across evolutionary alignments.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s2",
      "label": "Pair Representation & Spatial Distance Maps",
      "description": "2D matrix tracking pairwise distances and spatial relationships between all residue pairs (N_res x N_res).",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s2_d1",
      "label": "Distogram Prediction Head",
      "description": "Predicting binned 3D distance distributions between all C-beta atom pairs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s2_d2",
      "label": "Pair Representation Updating",
      "description": "Refining 2D pairwise interaction maps iteratively through attention layers.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s3",
      "label": "Evoformer Block Attention Architecture",
      "description": "Novel Transformer architecture interleaving MSA row/column attention with Pair representation triangular updates.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s3_d1",
      "label": "Axial MSA Row and Column Attention",
      "description": "Attending across sequence positions (columns) and evolutionary sequences (rows).",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s3_d2",
      "label": "Triangular Multiplicative Update & Attention",
      "description": "Enforcing 3D spatial triangle inequality constraints across pairwise representations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s4",
      "label": "Structure Module & Invariant Point Attention (IPA)",
      "description": "Translating refined representations into 3D atomic backbone coordinates.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s4_d1",
      "label": "3D Rigid Body Frame Representation (r_i in SE(3))",
      "description": "Representing each residue as a 3D rigid body frame [Rotation | Translation].",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s4_d2",
      "label": "Invariant Point Attention (IPA) Layer",
      "description": "3D-rotation invariant attention mechanism operating directly on 3D spatial points.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s5",
      "label": "AlphaFold3 Diffusion Engine & Biomolecular Hetero-Complexes",
      "description": "Extending structure prediction to DNA, RNA, small molecule ligands, and chemical modifications using 3D diffusion generative models.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s5_d1",
      "label": "Replacing Structure Module with 3D Atom Diffusion",
      "description": "Denoising 3D atomic coordinates directly using generative score-based diffusion.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t2_s5_d2",
      "label": "Unified Protein-DNA-RNA-Small-Molecule Complex Prediction",
      "description": "Predicting drug-protein and protein-nucleic-acid binding structures simultaneously.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3",
      "label": "Molecular Dynamics (MD) Simulation Physics (GROMACS / AMBER)",
      "description": "Simulating atomic movements of proteins over time by integrating Newton's equations of motion.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s1",
      "label": "Empirical Molecular Mechanics Force Fields (CHARMM / AMBER)",
      "description": "Mathematical potential energy functions calculating forces on all atoms.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s1_d1",
      "label": "Bonded Potential Terms (Bonds, Angles, Dihedrals)",
      "description": "Harmonic springs for bond lengths and angle bending plus periodic torsions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s1_d2",
      "label": "Non-Bonded Terms (Lennard-Jones + Coulomb Electrostatics)",
      "description": "Calculating van der Waals forces and electrostatic point-charge interactions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s2",
      "label": "Verlet & Leapfrog Numerical Integration Schemes",
      "description": "Integrating atomic accelerations to update positions and velocities across short time steps (1-2 femtoseconds).",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s2_d1",
      "label": "2-Femtosecond Time Step Boundary",
      "description": "Limiting time steps to resolve fast hydrogen atom vibrations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s2_d2",
      "label": "SHAKE / LINCS Constraint Algorithms",
      "description": "Constraining rigid hydrogen bonds to enable larger 2-fs integration time steps.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s3",
      "label": "Explicit Water Solvation & Periodic Boundary Conditions (PBC)",
      "description": "Simulating proteins in realistic solvent environments.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s3_d1",
      "label": "TIP3P / SPC Explicit Water Box Models",
      "description": "Surrounding proteins with thousands of discrete water molecules.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s3_d2",
      "label": "Particle Mesh Ewald (PME) Long-Range Electrostatics",
      "description": "Calculating long-range electrostatic forces in Fourier space under periodic boundaries.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s4",
      "label": "Thermostats & Barostats (NVT & NPT Ensembles)",
      "description": "Controlling simulation temperature and pressure to mimic physiological conditions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s4_d1",
      "label": "Nosé-Hoover / V-Rescale Thermostats (310 Kelvin)",
      "description": "Coupling system atomic velocities to thermal baths.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s4_d2",
      "label": "Parrinello-Rahman Barostats (1 bar Pressure)",
      "description": "Adjusting simulation box volume dynamically to maintain 1 atm pressure.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s5",
      "label": "GPU Acceleration & Microsecond Trajectory Sampling",
      "description": "Executing MD simulations at high performance on GPU clusters.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s5_d1",
      "label": "GPU Force Calculation Offloading (GROMACS CUDA)",
      "description": "Offloading non-bonded Lennard-Jones and PME calculations to GPU VRAM.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t3_s5_d2",
      "label": "Microsecond Trajectory Sampling Capabilities",
      "description": "Simulating 1+ microsecond biological events to observe conformational changes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4",
      "label": "Protein Surface Electrostatics & Binding Pocket Analysis",
      "description": "Analyzing physical surface properties of proteins to locate active sites and drug binding pockets.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s1",
      "label": "Poisson-Boltzmann Electrostatic Continuum Models (APBS)",
      "description": "Solving Poisson-Boltzmann differential equations to map continuous electrostatic surface potentials.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s1_d1",
      "label": "Dielectric Boundary Mapping (Solvent vs Protein Core)",
      "description": "Assigning low dielectric constants (epsilon ~ 2) to protein cores and high constants (epsilon ~ 80) to solvent.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s1_d2",
      "label": "Positive/Negative Surface Potential Visualization",
      "description": "Identifying positively charged patches that attract nucleic acids or negative ligands.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s2",
      "label": "Solvent-Accessible Surface Area (SASA / Shrake-Rupley)",
      "description": "Calculating protein surface areas accessible to water probe spheres (radius 1.4 Angstroms).",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s2_d1",
      "label": "Rolling Probe Sphere Geometry",
      "description": "Rolling 1.4A spheres over atomic van der Waals spheres.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s2_d2",
      "label": "Quantifying Residue Hydrophobicity Exposure",
      "description": "Measuring surface exposure of hydrophobic vs hydrophilic residues.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s3",
      "label": "Grid-Based Binding Pocket Detection (FPocket / Deepsite)",
      "description": "Algorithms identifying concave pockets on protein surfaces suitable for small molecule binding.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s3_d1",
      "label": "Alpha Sphere Clustering (FPocket)",
      "description": "Inserting mathematical alpha spheres to detect concave cavities.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s3_d2",
      "label": "3D Convolutional Neural Network Pocket Prediction",
      "description": "Predicting druggable binding sites using 3D voxel neural networks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s4",
      "label": "Protein-Protein Interface (PPI) Contact Residue Mapping",
      "description": "Mapping amino acid residues participating in protein complex interfaces.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s4_d1",
      "label": "Interface Buried Surface Area (BSA) Calculation",
      "description": "Measuring surface area buried upon complex formation.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s4_d2",
      "label": "Hotspot Residue Identification (Alanine Scanning)",
      "description": "Identifying critical residues whose mutation abolishes binding affinity.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s5",
      "label": "Allosteric Site Identification & Dynamic Communication Pathways",
      "description": "Locating non-active-site regulatory pockets that alter protein activity upon ligand binding.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s5_d1",
      "label": "Normal Mode Analysis (NMA) & Elastic Network Models",
      "description": "Calculating low-frequency global vibrational modes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t4_s5_d2",
      "label": "Long-Range Conformational Coupling Maps",
      "description": "Tracing internal atomic motion networks connecting allosteric sites to active sites.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5",
      "label": "Structural Bioinformatics & Protein Folding Topic 5",
      "description": "Detailed first-principles mechanics for Structural Bioinformatics & Protein Folding topic 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s1",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Structural Bioinformatics & Protein Folding Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s1_d1",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s1_d2",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s2",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Structural Bioinformatics & Protein Folding Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s2_d1",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s2_d2",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s3",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Structural Bioinformatics & Protein Folding Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s3_d1",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s3_d2",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s4",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Structural Bioinformatics & Protein Folding Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s4_d1",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s4_d2",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s5",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Structural Bioinformatics & Protein Folding Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s5_d1",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t5_s5_d2",
      "label": "Structural Bioinformatics & Protein Folding Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6",
      "label": "Structural Bioinformatics & Protein Folding Topic 6",
      "description": "Detailed first-principles mechanics for Structural Bioinformatics & Protein Folding topic 6.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s1",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Structural Bioinformatics & Protein Folding Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s1_d1",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s1_d2",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s2",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Structural Bioinformatics & Protein Folding Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s2_d1",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s2_d2",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s3",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Structural Bioinformatics & Protein Folding Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s3_d1",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s3_d2",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s4",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Structural Bioinformatics & Protein Folding Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s4_d1",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s4_d2",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s5",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Structural Bioinformatics & Protein Folding Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s5_d1",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p3_t6_s5_d2",
      "label": "Structural Bioinformatics & Protein Folding Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Structural Bioinformatics & Protein Folding Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4",
      "label": "Variant Calling & Population Genomics",
      "description": "GATK HaplotypeCaller, VCF format specs, Single Nucleotide Polymorphisms (SNPs), Structural Variants (SV), and GWAS.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1",
      "label": "GATK HaplotypeCaller Architecture",
      "description": "Gold-standard Bayesian variant caller re-assembling local genomic regions to identify SNPs and Indels.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s1",
      "label": "Active Region Detection & Local Re-Assembly",
      "description": "Identifying genomic intervals containing evidence of variation and re-assembling reads into De Bruijn graphs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s1_d1",
      "label": "Active Region Discrepancy Thresholds",
      "description": "Triggering local assembly when read-reference mismatch counts exceed background noise.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s1_d2",
      "label": "Local De Bruijn Graph Construction",
      "description": "Re-assembling active region reads to construct candidate haplotype paths.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s2",
      "label": "Pair-HMM (Pair Hidden Markov Model) Read Likelihood Calculation",
      "description": "Computing exact probability P(Read | Haplotype) accounting for base insertion/deletion qualities.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s2_d1",
      "label": "Per-Base Indel Quality (Gap Open/Extension) Integration",
      "description": "Incorporating hardware-specific base error models.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s2_d2",
      "label": "Dynamic Programming Matrix Alignment",
      "description": "Calculating marginal likelihoods across all possible read-haplotype alignments.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s3",
      "label": "Bayesian Genotype Likelihood Evaluation (P(G | Data))",
      "description": "Applying Bayes' theorem to evaluate sample genotype probabilities (Hom-Ref, Het, Hom-Alt).",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s3_d1",
      "label": "Prior Allele Frequency Integration",
      "description": "Weighting genotype likelihoods using population allele frequencies.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s3_d2",
      "label": "Phred-Scaled Genotype Quality (GQ) & PL Scores",
      "description": "Reporting Phred-scaled likelihoods for all possible diploid genotypes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s4",
      "label": "GATK VQSR (Variant Quality Score Recalibration)",
      "description": "Machine learning filtering step evaluating variant call confidence using known truth sets (1000 Genomes, dbSNP).",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s4_d1",
      "label": "Gaussian Mixture Model Feature Clustering",
      "description": "Clustering variants based on Depth, Quality-by-Depth, ReadPosRankSum, and MappingQuality.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s4_d2",
      "label": "Tranche Filtering Sensitivity Thresholds (99.0%, 99.9%)",
      "description": "Selecting tranche thresholds balancing sensitivity and false positive rates.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s5",
      "label": "GATK Joint Genotyping Pipeline (GenotypeGVCFs)",
      "description": "Scaling variant calling across tens of thousands of exomes/genomes simultaneously.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s5_d1",
      "label": "gVCF (Genomic VCF) Intermediate Representation",
      "description": "Storing non-variant reference confidence blocks alongside variant calls.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t1_s5_d2",
      "label": "Eliminating the N+1 Re-calling Problem",
      "description": "Adding new samples to biobank cohorts without re-processing historical BAM files.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2",
      "label": "VCF (Variant Call Format) & BCF Data Specifications",
      "description": "Standardized text and binary formats for storing genetic variation data.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s1",
      "label": "VCF Header & 8 Mandatory Columns",
      "description": "Structure of VCF files storing variant locations and metadata.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s1_d1",
      "label": "Mandatory Columns (#CHROM, POS, ID, REF, ALT, QUAL, FILTER, INFO)",
      "description": "Defining core variant attributes per row.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s1_d2",
      "label": "Format & Sample Genotype Columns (GT:AD:DP:GQ:PL)",
      "description": "Encoding individual sample genotype calls (e.g. 0/1:12,14:26:99:450,0,500).",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s2",
      "label": "INFO & FORMAT Annotation Field Tags",
      "description": "Custom metadata keys describing variant population properties.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s2_d1",
      "label": "AF (Allele Frequency) & AC (Allele Count) Metadata",
      "description": "Recording population-level variant frequencies.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s2_d2",
      "label": "AD (Allelic Depth) & DP (Total Read Depth)",
      "description": "Tracking raw reference vs alternate read counts per sample.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s3",
      "label": "BCF Binary Compressed Equivalent Format",
      "description": "High-performance binary representation of VCF files using htslib.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s3_d1",
      "label": "BGZF Block Compression for VCF",
      "description": "Compressing text VCFs for sub-millisecond tabix indexed region queries.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s3_d2",
      "label": "10x Faster Parsing Speed in Downstream Tools",
      "description": "Accelerating population-scale GWAS data processing.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s4",
      "label": "Variant Annotation Engines (VEP / SnpEff / ANNOVAR)",
      "description": "Annotating variants with functional biological consequences.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s4_d1",
      "label": "Transcript Consequence Predictions (Synonymous, Missense, Nonsense, Frameshift)",
      "description": "Predicting impact on open reading frames and protein translation.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s4_d2",
      "label": "Loss-of-Function (LoF) High Confidence Tagging",
      "description": "Flagging stop-gained and splice-site disrupting mutations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s5",
      "label": "Clinical Significance Databases (ClinVar / gnomAD)",
      "description": "Cross-referencing variants against clinical health and population frequency databases.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s5_d1",
      "label": "gnomAD Population Allele Frequency Filtering",
      "description": "Filtering out common benign variants (AF > 1%) in rare disease investigations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t2_s5_d2",
      "label": "ClinVar Pathogenicity Classifications (Pathogenic, Benign, VUS)",
      "description": "Extracting curated clinical evidence tags for diagnosed mutations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3",
      "label": "Structural Variant (SV) Detection (Manta / DELLY / SURVIVOR)",
      "description": "Identifying large genomic alterations (> 50bp) including deletions, duplications, inversions, and translocations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s1",
      "label": "Paired-End Discordant Read Pair Analysis",
      "description": "Detecting SVs when read pair orientation or span distance deviates from expected insert size.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s1_d1",
      "label": "Abnormal Insert Size Span (Deletions & Insertions)",
      "description": "Identifying read pairs spanning significantly farther apart than mean insert sizes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s1_d2",
      "label": "Inverted Orientation Matches (Inversions)",
      "description": "Detecting read pairs aligning to identical strands (FF or RR).",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s2",
      "label": "Split-Read Alignment Analysis (Soft-Clipped Reads)",
      "description": "Detecting SV breakpoints where individual reads span across structural junctions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s2_d1",
      "label": "Supplementary Alignment CIGAR Strings (SA Tag)",
      "description": "Identifying reads whose prefix and suffix map to distant genomic locations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s2_d2",
      "label": "Base-Pair Exact Breakpoint Resolution",
      "description": "Pinpointing precise nucleotide coordinates of structural breaks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s3",
      "label": "Read-Depth Copy Number Variation (CNV) Profiling",
      "description": "Detecting large genomic duplications and deletions by measuring sequencing coverage depth.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s3_d1",
      "label": "GC-Bias Normalization of Binned Coverage",
      "description": "Adjusting read counts in 1kb-10kb genomic bins for local GC content.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s3_d2",
      "label": "Hidden Markov Model (HMM) Copy State Segmentation",
      "description": "Segmenting chromosomes into regions of Copy Number 0, 1, 2, 3+.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s4",
      "label": "Long-Read Structural Variant Calling (Sniffles / CuteSV)",
      "description": "Utilizing long Nanopore/PacBio reads to achieve 95%+ SV detection sensitivity.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s4_d1",
      "label": "Direct CIGAR Gap Inspection",
      "description": "Extracting 50bp+ insertions and deletions directly from long read alignments.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s4_d2",
      "label": "Resolving Complex Nesting & Translocation Breakpoints",
      "description": "Unraveling complex multi-breakpoint chromosomal rearrangements.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s5",
      "label": "SURVIVOR Multi-Caller SV Merging & Benchmarking",
      "description": "Consolidating structural variant calls across multiple algorithm callers.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s5_d1",
      "label": "Breakpoint Distance Window Merging",
      "description": "Combining matching SV calls within 100bp spatial windows.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t3_s5_d2",
      "label": "Consensus High-Confidence SV Callsets",
      "description": "Filtering out caller-specific false positive artifacts.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4",
      "label": "Genome-Wide Association Studies (GWAS) & PLINK",
      "description": "Statistical methods linking genetic variants across populations to complex traits and disease risks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s1",
      "label": "PLINK Binary Genotype Format (.bed / .bim / .fam)",
      "description": "Standard high-performance binary file format for population genotype matrices.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s1_d1",
      "label": "2-Bit Bit-Packed Genotype Representation (00=HomRef, 01=Het, 11=HomAlt)",
      "description": "Packing 4 sample genotypes into single bytes to compress petabyte matrices.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s1_d2",
      "label": ".bim Variant Metadata & .fam Sample Pedigree Files",
      "description": "Storing variant coordinates and sample phenotype/family metadata.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s2",
      "label": "Single-Variant Logistic & Linear Regression Association Tests",
      "description": "Testing statistical correlation between individual SNP genotypes and disease phenotypes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s2_d1",
      "label": "Additive Genetic Model Encoding (0, 1, 2 Alt Alleles)",
      "description": "Regressing disease phenotype against alternate allele counts.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s2_d2",
      "label": "Covariate Adjustment (Age, Sex, Principal Components)",
      "description": "Controlling for confounding clinical variables in regression models.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s3",
      "label": "Population Stratification Correction via PCA",
      "description": "Using Principal Component Analysis (PCA) on genotype matrices to correct for ancestral population structure.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s3_d1",
      "label": "Genomic Principal Components PC1-PC10 Insertion",
      "description": "Including top 10 PCs as regression covariates to prevent false positive ancestry associations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s3_d2",
      "label": "Eigenstrat Genetic Ancestry Clustering",
      "description": "Clustering biobank cohort samples into distinct ancestral subgroups.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s4",
      "label": "Manhattan Plots & Genome-Wide Significance Threshold (p < 5e-8)",
      "description": "Visualizing association p-values across all chromosomes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s4_d1",
      "label": "-log10(p-value) Chromosomal Scatter Plots",
      "description": "Plotting statistical association strength across full genomes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s4_d2",
      "label": "Bonferroni Multiple Testing Correction Threshold (5 x 10^-8)",
      "description": "Adjusting significance cutoffs to control false discovery rates across 1 million independent tests.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s5",
      "label": "Polygenic Risk Score (PRS) Calculation",
      "description": "Aggregating effect sizes across thousands of GWAS variants to estimate overall individual genetic disease risk.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s5_d1",
      "label": "Linkage Disequilibrium (LD) Clumping & Thresholding (C+T)",
      "description": "Selecting independent lead SNPs to avoid double-counting correlated variants.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t4_s5_d2",
      "label": "Weighted Sum Disease Risk Scoring (PRS = sum(beta_i * SNP_i))",
      "description": "Computing continuous personalized genetic risk scores for clinical stratification.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5",
      "label": "Variant Calling & Population Genomics Topic 5",
      "description": "Detailed first-principles mechanics for Variant Calling & Population Genomics topic 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s1",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Variant Calling & Population Genomics Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s1_d1",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s1_d2",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s2",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Variant Calling & Population Genomics Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s2_d1",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s2_d2",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s3",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Variant Calling & Population Genomics Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s3_d1",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s3_d2",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s4",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Variant Calling & Population Genomics Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s4_d1",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s4_d2",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s5",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Variant Calling & Population Genomics Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s5_d1",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t5_s5_d2",
      "label": "Variant Calling & Population Genomics Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6",
      "label": "Variant Calling & Population Genomics Topic 6",
      "description": "Detailed first-principles mechanics for Variant Calling & Population Genomics topic 6.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s1",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Variant Calling & Population Genomics Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s1_d1",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s1_d2",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s2",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Variant Calling & Population Genomics Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s2_d1",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s2_d2",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s3",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Variant Calling & Population Genomics Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s3_d1",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s3_d2",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s4",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Variant Calling & Population Genomics Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s4_d1",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s4_d2",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s5",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Variant Calling & Population Genomics Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s5_d1",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p4_t6_s5_d2",
      "label": "Variant Calling & Population Genomics Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variant Calling & Population Genomics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5",
      "label": "Transcriptomics & Single-Cell Sequencing",
      "description": "RNA-Seq differential expression (DESeq2), Single-Cell RNA-Seq (scRNA-Seq Seurat/Scanpy), UMAP, and Cell type annotation.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1",
      "label": "Bulk RNA-Seq Quantification (Kallisto / Salmon)",
      "description": "Pseudo-alignment algorithms quantifying gene expression levels without full read alignment.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s1",
      "label": "Kallisto Pseudo-Alignment Index (K-mer De Bruijn Graphs)",
      "description": "Matching RNA-Seq reads against target transcript De Bruijn graphs without computing base-by-base alignments.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s1_d1",
      "label": "Transcript Compatibility Class (TCC) Matching",
      "description": "Assigning reads to sets of candidate transcripts sharing matching k-mers.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s1_d2",
      "label": "100x Faster Quantification Speeds",
      "description": "Quantifying RNA-Seq samples in seconds per file.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s2",
      "label": "Expectation-Maximization (EM) Isoform Abundance Estimation",
      "description": "Probabilistic algorithm resolving multi-mapping reads among alternative transcript isoforms.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s2_d1",
      "label": "Maximum Likelihood Isoform Abundance Estimation",
      "description": "Iteratively updating transcript expression estimates until convergence.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s2_d2",
      "label": "Resolving Alternative Splicing Ambiguities",
      "description": "Disambiguating shared exon reads across splice variants.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s3",
      "label": "TPM (Transcripts Per Million) Normalization",
      "description": "Normalizing read counts for sequencing depth and transcript length.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s3_d1",
      "label": "RPKM / FPKM vs TPM Mathematical Differences",
      "description": "Demonstrating why TPM is superior for cross-sample expression comparisons.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s3_d2",
      "label": "Sum-to-1-Million Constant Proportionality Invariant",
      "description": "Ensuring total TPM sum equals 1,000,000 across all samples.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s4",
      "label": "DESeq2 & edgeR Differential Expression Analysis",
      "description": "Statistical methods identifying significantly up- or down-regulated genes between biological conditions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s4_d1",
      "label": "Negative Binomial Distribution Count Modeling",
      "description": "Modeling over-dispersed RNA-Seq read counts across biological replicates.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s4_d2",
      "label": "Empirical Bayes Shrinkage of Log2 Fold Changes",
      "description": "Shrinking fold-change estimates for low-count genes to prevent false positives.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s5",
      "label": "Benjamini-Hochberg False Discovery Rate (FDR / Padj)",
      "description": "Correcting p-values for multiple hypothesis testing across 20,000+ genes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s5_d1",
      "label": "Adjusted p-value (padj < 0.05) Thresholding",
      "description": "Controlling false positive gene discovery rates in differential expression experiments.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t1_s5_d2",
      "label": "Volcano Plot Visualization (Log2 Fold Change vs -log10 Padj)",
      "description": "Plotting expression magnitude against statistical significance.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2",
      "label": "Single-Cell RNA-Seq (scRNA-Seq 10x Genomics Chromium)",
      "description": "Microfluidic droplet technology profiling gene expression at single-cell resolution.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s1",
      "label": "Microfluidic Droplet Barcoding (GEMs - Gel Beads-in-Emulsion)",
      "description": "Encapsulating single cells with barcoded gel beads inside oil micro-droplets.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s1_d1",
      "label": "Cell-Specific Barcode Oligos (16bp Cell Barcode)",
      "description": "Labeling all cDNA molecules originating from single cells with unique cell barcodes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s1_d2",
      "label": "Poly-T RT Primer mRNA Capture",
      "description": "Capturing poly-adenylated mRNA transcripts inside microfluidic droplets.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s2",
      "label": "Unique Molecular Identifiers (UMIs - 10-12bp Random Oligos)",
      "description": "Tagging individual mRNA molecules prior to PCR amplification to eliminate PCR duplication bias.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s2_d1",
      "label": "Absolute Molecule Counting (Deduplication by UMI)",
      "description": "Counting unique UMI-gene pairs rather than raw PCR amplified reads.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s2_d2",
      "label": "Eliminating Amplification Saturation Artifacts",
      "description": "Removing PCR duplicates to obtain true digital gene expression counts.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s3",
      "label": "Cell Ranger Pipeline Execution",
      "description": "Demultiplexing, alignment, and UMI counting pipeline for 10x Genomics data.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s3_d1",
      "label": "Cell-Containing vs Empty Droplet Identification (EmptyDrops)",
      "description": "Distinguishing true single cells from ambient RNA background droplets.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s3_d2",
      "label": "Filtered Feature-Barcode Matrix Generation",
      "description": "Outputting sparse expression matrices (Genes x Cells).",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s4",
      "label": "Sparse Matrix Data Formats (Market Exchange Coordinate / HDF5 / AnnData)",
      "description": "Storing high-dimensional sparse single-cell matrices efficiently.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s4_d1",
      "label": "CSR / CSC Compressed Sparse Column Formats",
      "description": "Storing only non-zero gene expression entries to save 95%+ RAM.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s4_d2",
      "label": "AnnData (.h5ad) Data Structure in Python (Scanpy)",
      "description": "Unifying expression matrices, cell metadata (obs), and gene metadata (var).",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s5",
      "label": "Single-Cell Quality Control & Doublet Filtering (Scrublet)",
      "description": "Filtering out damaged cells, low-quality libraries, and multi-cell artifacts.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s5_d1",
      "label": "Mitochondrial Read Percentage Filtering (> 5-10% Mito Cutoff)",
      "description": "Removing lysed dead cells exhibiting high mitochondrial transcript ratios.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t2_s5_d2",
      "label": "Doublet Detection Algorithms (Scrublet / DoubletFinder)",
      "description": "Identifying droplets containing two or more encapsulated cells.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3",
      "label": "Single-Cell Analysis Pipelines (Scanpy / Seurat)",
      "description": "Downstream computational workflows for clustering, cell-type annotation, and trajectory inference.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s1",
      "label": "Normalisation & Highly Variable Gene (HVG) Selection",
      "description": "Pre-processing single-cell count matrices for downstream dimensionality reduction.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s1_d1",
      "label": "Normalize Total Counts (10,000 Reads per Cell) & Log1p Shift",
      "description": "Standardizing sequencing depth across cells.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s1_d2",
      "label": "Selecting Top 2,000-3,000 Highly Variable Genes",
      "description": "Filtering out housekeeping genes to focus analysis on biologically informative markers.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s2",
      "label": "Principal Component Analysis (PCA) & Harmony Batch Correction",
      "description": "Reducing high-dimensional gene space to top 30-50 principal components while removing batch effects.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s2_d1",
      "label": "Elbow Plot Selection of Principal Components",
      "description": "Selecting top PCs capturing dominant biological variance.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s2_d2",
      "label": "Harmony / Integration Batch Correction",
      "description": "Merging datasets from multiple patient donors or lab batches without masking biological signals.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s3",
      "label": "UMAP & t-SNE Non-Linear Dimensionality Reduction",
      "description": "Projecting high-dimensional PC space into 2D plots for visual cell cluster inspection.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s3_d1",
      "label": "UMAP (Uniform Manifold Approximation and Projection)",
      "description": "Preserving both local neighbor relationships and global continuum topology.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s3_d2",
      "label": "t-SNE (t-Distributed Stochastic Neighbor Embedding)",
      "description": "Visualizing distinct isolated cell clusters.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s4",
      "label": "Leiden & Louvain Graph-Based Cell Clustering",
      "description": "Partitioning k-nearest neighbor (kNN) cell graphs into discrete cell-type clusters.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s4_d1",
      "label": "k-Nearest Neighbor (kNN) Graph Construction",
      "description": "Connecting cells based on Euclidean distance in PC space.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s4_d2",
      "label": "Leiden Modularity Maximization Algorithm",
      "description": "Clustering kNN graphs into distinct cell populations without forming disconnected communities.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s5",
      "label": "Automated Cell-Type Annotation & Marker Gene Identification",
      "description": "Assigning biological cell identities (e.g. CD4+ T-Cells, Macrophages) to clusters.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s5_d1",
      "label": "Differential Expression Rank-Genes-Groups (Wilcoxon Rank-Sum)",
      "description": "Identifying marker genes uniquely expressed in specific clusters.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t3_s5_d2",
      "label": "Reference-Based Automated Classification (CellTypist / Azimuth)",
      "description": "Mapping single-cell datasets to annotated reference atlas maps.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4",
      "label": "RNA Velocity & Pseudotime Trajectory Inference",
      "description": "Modeling dynamic cellular differentiation trajectories and future cell states.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s1",
      "label": "Spliced vs Un-spliced Pre-mRNA Transcript Ratios (velocyto / scVelo)",
      "description": "Distinguishing newly transcribed un-spliced pre-mRNA (containing introns) from mature spliced mRNA.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s1_d1",
      "label": "Intron Retention Quantification in scRNA-Seq",
      "description": "Counting reads mapping to intron-exon junctions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s1_d2",
      "label": "Transcriptional Dynamics Phase Portraits",
      "description": "Modeling gene induction and repression dynamics using differential equations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s2",
      "label": "RNA Velocity Vector Field Prediction",
      "description": "Predicting the future directional trajectory of individual cells on UMAP embeddings.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s2_d1",
      "label": "Cell-Specific Derivative Vectors (dx/dt)",
      "description": "Calculating future gene expression state vectors for single cells.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s2_d2",
      "label": "Streamline Trajectory Arrow Plotting",
      "description": "Overlaying directional velocity arrows onto 2D UMAP plots.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s3",
      "label": "Monocle3 & Diffusion Pseudotime (DPT) Ordering",
      "description": "Ordering cells along continuous developmental trajectories (e.g. stem cell differentiation).",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s3_d1",
      "label": "Minimum Spanning Tree (MST) Graph Traversal",
      "description": "Constructing principal graphs along cellular differentiation paths.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s3_d2",
      "label": "Root Cell Selection & Pseudotime Distance Assignment",
      "description": "Calculating continuous developmental progress metrics relative to root stem cells.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s4",
      "label": "Cell-Cell Communication Analysis (CellPhoneDB / CellChat)",
      "description": "Inferring intercellular signaling networks by matching ligand-receptor pair expression.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s4_d1",
      "label": "Curated Ligand-Receptor Interaction Databases",
      "description": "Matching expressed ligands in sender cells to expressed receptors in receiver cells.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s4_d2",
      "label": "Permutation-Based Communication Probability Significance",
      "description": "Identifying significant cell-to-cell cross-talk communication pathways.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s5",
      "label": "Spatial Transcriptomics (10x Visium / Stereo-seq / MERFISH)",
      "description": "Profiling gene expression while preserving 2D spatial tissue architecture.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s5_d1",
      "label": "Spatially Barcoded Capture Slides (Visium 55um Spots)",
      "description": "Mapping cDNA back to physical tissue histological locations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t4_s5_d2",
      "label": "Sub-Cellular Imaging-Based Transcriptomics (MERFISH / Xenium)",
      "description": "Counting single RNA molecules in situ using multiplexed FISH imaging.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5",
      "description": "Detailed first-principles mechanics for Transcriptomics & Single-Cell Sequencing topic 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Transcriptomics & Single-Cell Sequencing Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s1_d1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s1_d2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Transcriptomics & Single-Cell Sequencing Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s2_d1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s2_d2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s3",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Transcriptomics & Single-Cell Sequencing Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s3_d1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s3_d2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s4",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Transcriptomics & Single-Cell Sequencing Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s4_d1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s4_d2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s5",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Transcriptomics & Single-Cell Sequencing Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s5_d1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t5_s5_d2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6",
      "description": "Detailed first-principles mechanics for Transcriptomics & Single-Cell Sequencing topic 6.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Transcriptomics & Single-Cell Sequencing Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s1_d1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s1_d2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Transcriptomics & Single-Cell Sequencing Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s2_d1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s2_d2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s3",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Transcriptomics & Single-Cell Sequencing Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s3_d1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s3_d2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s4",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Transcriptomics & Single-Cell Sequencing Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s4_d1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s4_d2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s5",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Transcriptomics & Single-Cell Sequencing Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s5_d1",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p5_t6_s5_d2",
      "label": "Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Transcriptomics & Single-Cell Sequencing Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6",
      "label": "Epigenomics & Chromatin Architecture",
      "description": "ATAC-Seq chromatin accessibility, ChIP-Seq histone modifications, Bisulfite sequencing (BS-Seq), and Hi-C 3D genome conformation.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1",
      "label": "ATAC-Seq (Assay for Transposase-Accessible Chromatin)",
      "description": "Profiling open chromatin regions across genomes using hyperactive Tn5 transposases.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s1",
      "label": "Hyperactive Tn5 Transposase Cleavage & Tagmentation",
      "description": "Cutting open, un-wrapped DNA and inserting sequencing adapters simultaneously.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s1_d1",
      "label": "Steric Accessibility Preference",
      "description": "Cleaving open regulatory DNA (promoters, enhancers) while leaving nucleosome-bound DNA intact.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s1_d2",
      "label": "Tagmentation Library Generation in 30 Minutes",
      "description": "Executing DNA fragmentation and adapter ligation in single reactions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s2",
      "label": "Nucleosome Periodicity & Fragment Length Distributions",
      "description": "Analyzing fragment length patterns reflecting nucleosome wrapping.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s2_d1",
      "label": "Sub-Nucleosomal Fragments (< 100bp Open Region Reads)",
      "description": "Capturing nucleosome-free transcription factor binding sites.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s2_d2",
      "label": "Mono-, Di-, Tri-Nucleosomal Periodicity Peaks (~200bp, 400bp, 600bp)",
      "description": "Observing 147bp DNA wrapping intervals around histone octamers.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s3",
      "label": "MACS2 / MACS3 Peak Calling Algorithms",
      "description": "Identifying statistically significant enriched genomic regions (open chromatin peaks).",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s3_d1",
      "label": "Poisson Local Background Noise Distribution",
      "description": "Comparing local fragment counts against dynamic background noise models.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s3_d2",
      "label": "Narrow Peak vs Broad Peak Modes",
      "description": "Calling sharp transcription factor peaks vs broad histone domains.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s4",
      "label": "Transcription Factor Footprinting Analysis (TOBIAS)",
      "description": "Detecting physical transcription factor binding protection footprints inside open ATAC-Seq peaks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s4_d1",
      "label": "Tn5 Insertion Cleavage Depletion Patterns",
      "description": "Observing local drop-offs in Tn5 cleavage at exact transcription factor binding sites.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s4_d2",
      "label": "Identifying Active Transcription Factors",
      "description": "Inferring which transcription factors are actively bound to chromatin.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s5",
      "label": "Single-Cell ATAC-Seq (scATAC-Seq)",
      "description": "Profiling open chromatin landscapes at single-cell resolution.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s5_d1",
      "label": "Cell-Specific Combinatorial Indexing",
      "description": "Tagging single-cell nuclei with unique barcode combinations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t1_s5_d2",
      "label": "Mapping Cell-State Specific Enhancer Networks",
      "description": "Uncovering cell-type specific regulatory elements.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2",
      "label": "ChIP-Seq (Chromatin Immunoprecipitation Sequencing)",
      "description": "Profiling genome-wide binding sites of specific transcription factors or histone modifications.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s1",
      "label": "Formaldehyde Cross-Linking & Chromatin Sonication",
      "description": "Fixing protein-DNA interactions and shearing genomic DNA into 200-500bp fragments.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s1_d1",
      "label": "Reversible Covalent Cross-Linking",
      "description": "Locking protein-DNA complexes in place using 1% formaldehyde.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s1_d2",
      "label": "Ultrasonic Shearing Optimization",
      "description": "Fragmenting chromatin via controlled acoustic sonication.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s2",
      "label": "Specific Antibody Immunoprecipitation & Reversal",
      "description": "Pulling down target protein-DNA complexes using specific antibodies.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s2_d1",
      "label": "Magnetic Bead Antibody Pull-Down",
      "description": "Isolating specific target proteins (e.g. H3K4me3, H3K27ac, CTCF) with magnetic beads.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s2_d2",
      "label": "Cross-Link Reversal & DNA Purification",
      "description": "Un-binding proteins at 65C to purify DNA for sequencing.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s3",
      "label": "Histone Mark Categories (Active vs Repressive)",
      "description": "Categorizing histone modifications based on transcriptional activity associations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s3_d1",
      "label": "Active Promoters & Enhancers (H3K4me3, H3K27ac)",
      "description": "Marking active transcription start sites and active enhancer elements.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s3_d2",
      "label": "Repressive Heterochromatin Domains (H3K27me3, H3K9me3)",
      "description": "Marking Polycomb-repressed and constitutive heterochromatin regions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s4",
      "label": "Input Control & IgG Mock Background Subtraction",
      "description": "Using non-immunoprecipitated control samples to eliminate false positive artifacts.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s4_d1",
      "label": "Sonication & Copy Number Bias Correction",
      "description": "Correcting for uneven chromatin shearing and genomic copy number variations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s4_d2",
      "label": "Normalized Fold-Enrichment Signal Tracks",
      "description": "Generating signal tracks showing true enrichment over input controls.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s5",
      "label": "CUT&RUN & CUT&Tag Next-Gen Technologies",
      "description": "Low-input alternatives replacing traditional ChIP-Seq.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s5_d1",
      "label": "In Situ Antibody-Targeted Cleavage (pAG-MNase / pAG-Tn5)",
      "description": "Cleaving target chromatin directly inside intact nuclei without cross-linking.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t2_s5_d2",
      "label": "100x Lower Input Requirement (100 Cells)",
      "description": "Generating clean histone profiles from minimal cell counts with zero background noise.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3",
      "label": "DNA Methylation & Whole-Genome Bisulfite Sequencing (WGBS)",
      "description": "Profiling 5-methylcytosine (5mC) DNA methylation marks across genomes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s1",
      "label": "Sodium Bisulfite Chemical Conversion Reaction",
      "description": "De-aminating un-methylated cytosines to uracil while leaving 5-methylcytosines intact.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s1_d1",
      "label": "Chemical Conversion Mechanics (Un-methylated C -> U -> T)",
      "description": "Converting un-methylated cytosines to uracils, which read as thymines (T) during PCR/sequencing.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s1_d2",
      "label": "Methylated Cytosine Resistance (5mC -> 5mC -> C)",
      "description": "Preserving methylated cytosines, which read as cytosines (C).",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s2",
      "label": "3-Alphabet / 4-Alphabet Alignment Challenges (Bismark)",
      "description": "Aligning bisulfite-converted reads with reduced 3-letter alphabet (A, G, T) to reference genomes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s2_d1",
      "label": "In-Silico Reference Genome Conversion",
      "description": "Converting reference C's to T's to enable 3-alphabet read alignment.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s2_d2",
      "label": "Directional vs Non-Directional Library Mapping",
      "description": "Tracking which strand was converted during library preparation.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s3",
      "label": "CpG Island & Promoter Hyper-Methylation Profiling",
      "description": "Measuring DNA methylation levels across CpG-dense genomic regions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s3_d1",
      "label": "CpG Island Silencing Architecture",
      "description": "Associating promoter CpG hyper-methylation with gene expression silencing.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s3_d2",
      "label": "Differentially Methylated Regions (DMRs)",
      "description": "Identifying genomic regions exhibiting significant methylation differences across samples.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s4",
      "label": "Epigenetic Clocks & Biological Age Prediction (Horvath Clock)",
      "description": "Predicting biological age based on DNA methylation levels across specific CpG sites.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s4_d1",
      "label": "Penalized Elastic-Net Regression Models",
      "description": "Predicting biological age from a subset of ~353 specific CpG sites.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s4_d2",
      "label": "Measuring Epigenetic Age Acceleration",
      "description": "Correlating accelerated biological age with mortality and disease risks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s5",
      "label": "Enzymatic Methyl-Seq (EM-Seq) Non-Destructive Alternative",
      "description": "Using enzymatic reactions (TET2 and APOBEC3A) to detect methylation without harsh bisulfite DNA damage.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s5_d1",
      "label": "Enzymatic Cytosine Conversion",
      "description": "Protecting DNA integrity to allow long-read methylation sequencing.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t3_s5_d2",
      "label": "Higher Library Yields and Uniform Coverage",
      "description": "Outperforming bisulfite sequencing in low-input and damaged DNA samples.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4",
      "label": "Hi-C & 3D Chromatin Conformation Capture",
      "description": "Profiling 3D physical genome folding, Topologically Associating Domains (TADs), and chromatin loops.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s1",
      "label": "Hi-C Experimental Workflow (Cross-link, Digest, Ligate, Sequence)",
      "description": "Proximity ligation assay capturing 3D spatial contacts between distant genomic loci.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s1_d1",
      "label": "Restriction Enzyme / Micrococcal Nuclease Digestion",
      "description": "Cleaving cross-linked chromatin into small spatial fragments.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s1_d2",
      "label": "Biotin-Labeled Junction Ligation & Pull-Down",
      "description": "Ligating spatially adjacent DNA ends and pulling down chimeric junction fragments.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s2",
      "label": "Hi-C 2D Contact Matrix Construction & ICE Normalization",
      "description": "Building 2D contact frequency matrices (Genomic Locus i x Genomic Locus j).",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s2_d1",
      "label": "Binned Spatial Contact Matrices (e.g. 5kb, 10kb, 40kb Bins)",
      "description": "Aggregating pairwise read counts into 2D spatial matrices.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s2_d2",
      "label": "Iterative Correction and Explicit (ICE) Normalization",
      "description": "Removing restriction site, GC, and mappability biases from contact matrices.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s3",
      "label": "A/B Chromatin Compartments Identification",
      "description": "Segmenting genomes into active (A) and inactive (B) 3D nuclear compartments using PCA.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s3_d1",
      "label": "First Principal Component (PC1) Eigenvector Segmentation",
      "description": "Partitioning genomes into open active A-compartments vs dense inactive B-compartments.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s3_d2",
      "label": "Nuclear Lamina Association (LADs)",
      "description": "Correlating B-compartments with heterochromatin bound to nuclear membranes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s4",
      "label": "Topologically Associating Domains (TADs) & Insulation Scores",
      "description": "Self-interacting 3D genomic regions bounded by insulator elements.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s4_d1",
      "label": "Insulation Score Boundary Detection",
      "description": "Calculating local insulation minimums to locate TAD boundaries.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s4_d2",
      "label": "CTCF & Cohesin Loop Extrusion Model",
      "description": "Extruding DNA loops until cohesin rings stall at convergent CTCF motif sites.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s5",
      "label": "Promoter-Enhancer Loop Calling (Mustache / HICCUPS)",
      "description": "Identifying high-resolution 3D chromatin loops linking distal enhancers to gene promoters.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s5_d1",
      "label": "Local Background Peak Enrichment Calling",
      "description": "Detecting focal contact pixels significantly brighter than surrounding matrix neighborhood.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t4_s5_d2",
      "label": "Linking Non-Coding Disease Variants to Target Genes",
      "description": "Connecting GWAS non-coding SNPs to target genes over megabase distances.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5",
      "label": "Epigenomics & Chromatin Architecture Topic 5",
      "description": "Detailed first-principles mechanics for Epigenomics & Chromatin Architecture topic 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s1",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Epigenomics & Chromatin Architecture Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s1_d1",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s1_d2",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s2",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Epigenomics & Chromatin Architecture Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s2_d1",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s2_d2",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s3",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Epigenomics & Chromatin Architecture Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s3_d1",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s3_d2",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s4",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Epigenomics & Chromatin Architecture Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s4_d1",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s4_d2",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s5",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Epigenomics & Chromatin Architecture Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s5_d1",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t5_s5_d2",
      "label": "Epigenomics & Chromatin Architecture Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6",
      "label": "Epigenomics & Chromatin Architecture Topic 6",
      "description": "Detailed first-principles mechanics for Epigenomics & Chromatin Architecture topic 6.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s1",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Epigenomics & Chromatin Architecture Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s1_d1",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s1_d2",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s2",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Epigenomics & Chromatin Architecture Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s2_d1",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s2_d2",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s3",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Epigenomics & Chromatin Architecture Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s3_d1",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s3_d2",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s4",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Epigenomics & Chromatin Architecture Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s4_d1",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s4_d2",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s5",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Epigenomics & Chromatin Architecture Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s5_d1",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p6_t6_s5_d2",
      "label": "Epigenomics & Chromatin Architecture Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Epigenomics & Chromatin Architecture Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7",
      "label": "Computational Drug Discovery & Virtual Screening",
      "description": "Virtual screening (AutoDock Vina), QSAR machine learning, Pharmacophore modeling, and binding free energy (MM-PBSA).",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1",
      "label": "Molecular Docking Algorithms (AutoDock Vina / Glide)",
      "description": "Predicting 3D binding poses and affinities of small molecule ligands inside target protein pockets.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s1",
      "label": "Ligand Conformation Search (Monte Carlo / Genetic Algorithms)",
      "description": "Sampling rotatable bond torsions and 3D translations to explore ligand binding poses.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s1_d1",
      "label": "Rotatable Bond Degree-of-Freedom Sampling",
      "description": "Exploring flexible ligand conformers inside rigid or semi-flexible protein pockets.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s1_d2",
      "label": "Iterated Local Search Lamarckian Genetic Algorithms",
      "description": "Combining global genetic search with local gradient minimization.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s2",
      "label": "Scoring Function Energy Evaluation",
      "description": "Empirical energy function calculating binding free energy estimates (kcal/mol).",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s2_d1",
      "label": "Inter-Molecular Energy Terms (van der Waals, Hydrogen Bonds, Electrostatics)",
      "description": "Scoring non-covalent interactions between ligand and protein.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s2_d2",
      "label": "Hydrophobic & Desolvation Penalty Models",
      "description": "Estimating free energy gains from water displacement.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s3",
      "label": "Grid-Based Energy Map Pre-Computation",
      "description": "Pre-computing potential energy fields over 3D target grid boxes to accelerate docking runs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s3_d1",
      "label": "3D Affinity Grid Map Generation",
      "description": "Storing atom-type interaction potentials at 0.375A grid intervals.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s3_d2",
      "label": "100x Docking Speedup",
      "description": "Evaluating thousand-ligand virtual screening libraries in minutes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s4",
      "label": "RMSD Pose Clustering & Binding Mode Selection",
      "description": "Clustering docked ligand poses by Root-Mean-Square Deviation (RMSD).",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s4_d1",
      "label": "2.0 Angstrom RMSD Cluster Cutoff",
      "description": "Grouping similar binding poses into distinct structural clusters.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s4_d2",
      "label": "Selecting Lowest Energy Representative Poses",
      "description": "Identifying top candidate binding poses for visual inspection.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s5",
      "label": "Flexible Receptor Docking (Induced Fit Docking)",
      "description": "Allowing target protein sidechains to adjust conformations upon ligand binding.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s5_d1",
      "label": "Active Site Sidechain Flexibility",
      "description": "Allowing key residue sidechains to rotate during docking search.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t1_s5_d2",
      "label": "Modeling Conformational Adaptations",
      "description": "Accurately docking ligands that induce structural changes in target pockets.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2",
      "label": "Quantitative Structure-Activity Relationship (QSAR) & ML",
      "description": "Statistical and machine learning models predicting biological activity from chemical structure descriptors.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s1",
      "label": "2D/3D Molecular Fingerprints (ECFP4 / Morgan Fingerprints)",
      "description": "Encoding chemical structures into fixed-length binary bit vectors.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s1_d1",
      "label": "Circular Neighborhood Atom Extraction (Radius 2 / ECFP4)",
      "description": "Hashing local atomic environments up to 2 bonds away into 1024- or 2048-bit vectors.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s1_d2",
      "label": "Tanimoto Similarity Index Calculation (Jaccard Distance)",
      "description": "Measuring structural similarity between molecules (T = |A n B| / |A u B|).",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s2",
      "label": "RDKit Open-Source Cheminformatics Library",
      "description": "Python/C++ library for molecular manipulation, descriptor calculation, and SMILES parsing.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s2_d1",
      "label": "SMILES (Simplified Molecular Input Line Entry System) Parsing",
      "description": "Parsing string representations of chemical structures (e.g. CC(=O)OC1=CC=CC=C1C(=O)O).",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s2_d2",
      "label": "Calculating PhysChem Descriptors (LogP, MW, TPSA, HBD, HBA)",
      "description": "Computing molecular weight, lipophilicity, and topological polar surface area.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s3",
      "label": "Lipinski's Rule of 5 (Ro5) Druggability Filters",
      "description": "Empirical guidelines evaluating oral drug-likeness of small molecules.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s3_d1",
      "label": "Ro5 Parameters (MW <= 500, LogP <= 5, HBD <= 5, HBA <= 10)",
      "description": "Filtering out compounds unlikely to achieve acceptable oral bioavailability.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s3_d2",
      "label": "Veber Rules (Rotatable Bonds <= 10, TPSA <= 140A^2)",
      "description": "Additional permeability and absorption filters.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s4",
      "label": "Graph Neural Networks for Drug Discovery (GNNs / ChemPROP)",
      "description": "Deep learning models operating directly on molecular graphs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s4_d1",
      "label": "Message Passing Neural Networks (MPNN)",
      "description": "Passing feature vectors along chemical bonds to learn continuous molecular representations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s4_d2",
      "label": "Property Prediction (ADMET, IC50, Toxicity)",
      "description": "Predicting absorption, distribution, metabolism, excretion, and toxicity properties.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s5",
      "label": "Generative AI for De Novo Molecule Design (DiffDock / REINVENT)",
      "description": "Generative reinforcement learning and diffusion models generating novel drug-like molecules.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s5_d1",
      "label": "SMILES Recurrent & Transformer Generators",
      "description": "Generating novel SMILES strings optimized for target binding affinity.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t2_s5_d2",
      "label": "3D Equivariant Diffusion Models for Molecular Generation",
      "description": "Generating 3D atomic coordinates of novel ligands directly inside target pockets.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3",
      "label": "Pharmacophore Modeling & 3D Search",
      "description": "Extracting abstract 3D arrangements of essential steric and electronic features required for drug binding.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s1",
      "label": "Pharmacophoric Feature Types (HBD, HBA, Hydrophobic, Aromatic, Positive/Negative Ionic)",
      "description": "Defining core chemical feature points independent of specific chemical scaffolds.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s1_d1",
      "label": "Hydrogen Bond Donor (HBD) & Acceptor (HBA) Vectors",
      "description": "Defining 3D direction vectors for hydrogen bonding.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s1_d2",
      "label": "Aromatic Ring & Hydrophobic Centroids",
      "description": "Defining spherical regions accommodating hydrophobic or pi-stacking interactions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s2",
      "label": "3D Pharmacophore Feature Distance Constrained Maps",
      "description": "Mapping spatial distances and tolerances between pharmacophoric features.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s2_d1",
      "label": "Inter-Feature 3D Distance Matrices",
      "description": "Defining allowed spatial distance ranges between active features.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s2_d2",
      "label": "Exclusion Volume Constraints",
      "description": "Defining steric boundary spheres where small molecule atoms cannot enter.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s3",
      "label": "3D Database Conformer Search (Phase / Catalyst)",
      "description": "Screening multi-million compound libraries against 3D pharmacophore queries.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s3_d1",
      "label": "Pre-Generating Multi-Conformer Libraries (100-500 conformers per molecule)",
      "description": "Sampling flexible 3D shapes for small molecules.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s3_d2",
      "label": "Rapid 3D Feature Geometric Matching",
      "description": "Filtering out compounds that cannot adopt target 3D pharmacophore geometries.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s4",
      "label": "Structure-Based vs Ligand-Based Pharmacophore Generation",
      "description": "Building models from protein target active sites vs sets of known active ligands.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s4_d1",
      "label": "Structure-Based (Derived from Protein Active Sites)",
      "description": "Extracting complementary features directly from target 3D binding pockets.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s4_d2",
      "label": "Ligand-Based (Derived from Shared Features of Active Compounds)",
      "description": "Aligning known active molecules to extract common pharmacophoric patterns.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s5",
      "label": "Scaffold Hopping & Novel Lead Optimization",
      "description": "Identifying structurally distinct chemical scaffolds that satisfy identical 3D pharmacophore models.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s5_d1",
      "label": "Bypassing Patent Constraints via Scaffold Hopping",
      "description": "Discovering novel core chemical structures with identical biological activity.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t3_s5_d2",
      "label": "Improving Drug Selectivity and Solubility",
      "description": "Swapping core scaffolds to resolve toxicity or solubility issues while retaining binding affinity.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4",
      "label": "Binding Free Energy Calculations (MM-PBSA / FEP)",
      "description": "Advanced computational physics methods for calculating accurate thermodynamic binding free energies.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s1",
      "label": "MM-PBSA / MM-GBSA Endpoint Free Energy Calculations",
      "description": "Calculating binding free energies by averaging snapshot energies from Molecular Dynamics trajectories.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s1_d1",
      "label": "Delta G_bind = G_complex - (G_protein + G_ligand) Formula",
      "description": "Calculating binding free energy differences.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s1_d2",
      "label": "Continuum Solvation Models (Poisson-Boltzmann / Generalized Born)",
      "description": "Estimating desolvation free energies using implicit solvent models.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s2",
      "label": "Free Energy Perturbation (FEP / Thermodynamic Integration)",
      "description": "Rigorous alchemical transformation methods calculating relative binding free energy differences (Delta Delta G).",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s2_d1",
      "label": "Alchemical Lambda Parameter Interpolation (lambda = 0 -> 1)",
      "description": "Mutating molecule A into molecule B across discrete lambda steps in MD simulations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s2_d2",
      "label": "Zwanzig Free Energy Perturbation Equation",
      "description": "Calculating free energy differences from ensemble work distributions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s3",
      "label": "Thermodynamic Cycle Closure Verification",
      "description": "Verifying accuracy of relative free energy calculations by completing closed triangular mutation cycles.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s3_d1",
      "label": "Hess's Law Cycle Closure (Sum Delta G = 0)",
      "description": "Checking that closed mutation cycles sum to zero free energy change.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s3_d2",
      "label": "Quantifying Calculation Error Margins (< 1 kcal/mol Accuracy)",
      "description": "Achieving experimental-grade binding affinity predictions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s4",
      "label": "Entropy Contribution Estimates (Normal Mode / Interaction Entropy)",
      "description": "Estimating loss of conformational entropy upon ligand binding.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s4_d1",
      "label": "Normal Mode Vibrational Entropy Calculation",
      "description": "Computing translational, rotational, and vibrational entropy losses.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s4_d2",
      "label": "Interaction Entropy Fluctuation Analysis",
      "description": "Extracting entropic penalties directly from MD interaction energy fluctuations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s5",
      "label": "Industrial FEP Deployment in Lead Optimization (Schrodinger FEP+)",
      "description": "Utilizing automated FEP pipelines to guide medicinal chemistry synthesis decisions.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s5_d1",
      "label": "Prioritizing Compound Synthesis Decisions",
      "description": "Predicting potencies before synthesizing physical chemical candidates.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t4_s5_d2",
      "label": "Accelerating Drug Candidate Optimization Cycles",
      "description": "Reducing required synthesis iterations from years to months.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5",
      "description": "Detailed first-principles mechanics for Computational Drug Discovery & Virtual Screening topic 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Computational Drug Discovery & Virtual Screening Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s1_d1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s1_d2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Computational Drug Discovery & Virtual Screening Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s2_d1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s2_d2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s3",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Computational Drug Discovery & Virtual Screening Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s3_d1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s3_d2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s4",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Computational Drug Discovery & Virtual Screening Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s4_d1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s4_d2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s5",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Computational Drug Discovery & Virtual Screening Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s5_d1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t5_s5_d2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6",
      "description": "Detailed first-principles mechanics for Computational Drug Discovery & Virtual Screening topic 6.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Computational Drug Discovery & Virtual Screening Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s1_d1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s1_d2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Computational Drug Discovery & Virtual Screening Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s2_d1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s2_d2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s3",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Computational Drug Discovery & Virtual Screening Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s3_d1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s3_d2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s4",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Computational Drug Discovery & Virtual Screening Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s4_d1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s4_d2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s5",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Computational Drug Discovery & Virtual Screening Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s5_d1",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p7_t6_s5_d2",
      "label": "Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Drug Discovery & Virtual Screening Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8",
      "label": "Synthetic Biology & Gene Editing (CRISPR)",
      "description": "CRISPR-Cas9 sgRNA target design, Off-target cleavage prediction, Base editing, Prime editing, and Gene circuit design.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1",
      "label": "CRISPR-Cas9 Mechanism & PAM Sequence Requirements",
      "description": "Bacterial adaptive immune system repurposed for targeted genome editing.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s1",
      "label": "SpCas9 Endonuclease Structure & Domain Architecture",
      "description": "Dual RNA-guided DNA endonuclease enzyme derived from Streptococcus pyogenes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s1_d1",
      "label": "RuvC & HNH Nuclease Catalytic Domains",
      "description": "Cleaving target DNA strands (HNH domain cleaves complementary strand, RuvC domain cleaves non-complementary strand).",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s1_d2",
      "label": "REC1/REC2 Recognition Lobe",
      "description": "Binding guide RNA and target DNA heteroduplexes.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s2",
      "label": "PAM (Protospacer Adjacent Motif) Recognition (5'-NGG-3')",
      "description": "Essential 2-3bp DNA sequence immediately following target DNA sequence required for Cas9 binding.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s2_d1",
      "label": "SpCas9 5'-NGG-3' PAM Requirement",
      "description": "Restricting target site selection to genomic positions adjacent to NGG motifs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s2_d2",
      "label": "Engineered Cas Variants (SpRY / xCas9) PAM Flexibility",
      "description": "Utilizing engineered Cas enzymes with relaxed PAM requirements (e.g. NNR, NNG).",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s3",
      "label": "Single Guide RNA (sgRNA - crRNA + tracrRNA Fusion)",
      "description": "Synthetic ~100-nucleotide RNA molecule guiding Cas9 to target genomic loci.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s3_d1",
      "label": "20-Nucleotide Spacer Target Region",
      "description": "Complementary 20bp sequence matching target genomic DNA.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s3_d2",
      "label": "Conserved Scaffold Hairpin Structure",
      "description": "Constant RNA hairpins required for Cas9 protein binding.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s4",
      "label": "DNA Unwinding, R-Loop Formation & Double-Strand Break (DSB)",
      "description": "Mechanics of Cas9 target recognition and cleavage.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s4_d1",
      "label": "R-Loop Strand Displacement Structure",
      "description": "Unwinding target DNA duplex to form stable 20bp RNA-DNA hybrid R-loops.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s4_d2",
      "label": "Blunt-End Double-Strand Break (3bp Upstream of PAM)",
      "description": "Generating clean double-strand DNA breaks 3 base pairs upstream of PAM sequences.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s5",
      "label": "Cas12a (Cpf1) & Cas13 RNA-Targeting Alternatives",
      "description": "Alternative CRISPR enzymes with distinct cleavage properties.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s5_d1",
      "label": "Cas12a 5'-TTTV-3' PAM & Staggered Sticky Ends",
      "description": "Generating 5-nucleotide 5' overhang staggered cuts.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t1_s5_d2",
      "label": "Cas13 Targeted RNA Cleavage & Collateral Degradation",
      "description": "Targeting single-stranded RNA for degradation (used in SHERLOCK diagnostics).",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2",
      "label": "DNA Repair Pathways (NHEJ vs HDR / MMEJ)",
      "description": "Cellular DNA repair mechanisms triggered by CRISPR-induced double-strand breaks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s1",
      "label": "Non-Homologous End Joining (NHEJ) Knockout Mechanism",
      "description": "Error-prone direct re-ligation of broken DNA ends resulting in indels.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s1_d1",
      "label": "Indel Mutation Profile (Insertions & Deletions)",
      "description": "Introducing frameshift mutations that disrupt open reading frames.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s1_d2",
      "label": "Targeted Gene Knockout (Loss-of-Function)",
      "description": "Abolishing functional protein expression for functional genomics studies.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s2",
      "label": "Homology-Directed Repair (HDR) Knock-In Mechanism",
      "description": "High-fidelity repair pathway utilizing homologous repair templates to introduce precise edits.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s2_d1",
      "label": "Donor DNA Repair Template Design (ssODN / Plasmid)",
      "description": "Providing synthetic repair templates containing desired mutations flanked by homology arms.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s2_d2",
      "label": "S/G2 Cell Cycle Dependency Limitation",
      "description": "Restricting HDR activity to actively dividing cells in S/G2 phases.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s3",
      "label": "Microhomology-Mediated End Joining (MMEJ / Micro-NHEJ)",
      "description": "Alternative end-joining pathway utilizing 2-25bp microhomologies flanking cut sites.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s3_d1",
      "label": "Predictable Deletion Patterns (inDelphi / FORECasT)",
      "description": "Predicting exact deletion outcomes based on local sequence microhomologies.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s3_d2",
      "label": "Precision Deletion without Repair Templates",
      "description": "Achieving deterministic gene knockouts without exogenous donor DNA.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s4",
      "label": "Cell Cycle Synchronization & HDR Efficiency Boosting",
      "description": "Methods for increasing HDR rates over competing NHEJ pathways.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s4_d1",
      "label": "NHEJ Small Molecule Inhibitors (Scr7 / KU-0060648)",
      "description": "Inhibiting DNA-PKcs to suppress NHEJ and favor HDR.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s4_d2",
      "label": "Cas9-Geminin Cell-Cycle Phase Tagging",
      "description": "Degrading Cas9 in G1 phase to restrict cleavage strictly to S/G2 phases.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s5",
      "label": "Chromosomal Rearrangement & Off-Target Translocation Risks",
      "description": "Safety risks associated with double-strand breaks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s5_d1",
      "label": "Large Chromosomal Deletions & Chromothripsis",
      "description": "Incurring megabase-scale deletions or chromosomal shattering.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t2_s5_d2",
      "label": "Off-Target Translocation Events",
      "description": "Ligating concurrent off-target DSBs on different chromosomes into oncogenic translocations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3",
      "label": "sgRNA On-Target Efficiency & Off-Target Prediction",
      "description": "Computational tools designing optimal sgRNAs with high cutting efficiency and zero off-target cleavage.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s1",
      "label": "sgRNA On-Target Scoring Algorithms (Rule Set 2 / DeepCRISPR)",
      "description": "Machine learning models predicting Cas9 cleavage efficiency from 20bp guide sequence context.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s1_d1",
      "label": "Nucleotide Position Preference Features",
      "description": "Rewarding Guanine at position 20 and Cytosine at position 16.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s1_d2",
      "label": "Deep Learning Efficiency Prediction",
      "description": "Predicting guide cutting scores using convolutional and recurrent neural networks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s2",
      "label": "Off-Target Mismatch Tolerance & Seed Region Metrics",
      "description": "Evaluating off-target cleavage likelihood based on mismatch locations.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s2_d1",
      "label": "Seed Region Sensitivity (1-12bp Adjacent to PAM)",
      "description": "Prohibiting mismatches inside the 12bp seed region closest to PAM.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s2_d2",
      "label": "Distal Mismatch Tolerance (13-20bp)",
      "description": "Tolerating 1-3 mismatches at the 5' distal end of guide sequences.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s3",
      "label": "Off-Target Search Tools (CRISPRoff / GUIDE-Seq / CIRCLE-Seq)",
      "description": "Computational and experimental methods mapping genome-wide off-target cleavage sites.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s3_d1",
      "label": "Genome-Wide Mismatch Search Algorithms (Off-Finder)",
      "description": "Searching full reference genomes for sub-sequences with <= 4 mismatches to guide.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s3_d2",
      "label": "GUIDE-Seq Un-biased Experimental Profiling",
      "description": "Tagging double-strand breaks in living cells with double-stranded oligodeoxynucleotides to map off-targets.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s4",
      "label": "High-Fidelity Cas9 Variants (SpCas9-HF1 / eSpCas9 / HiFi Cas9)",
      "description": "Engineered Cas9 mutants featuring reduced non-specific DNA contact energy.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s4_d1",
      "label": "Neutralizing Non-Specific Phosphate Backbone Contacts",
      "description": "Mutating positively charged residues to weaken non-specific binding energy.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s4_d2",
      "label": ">100-Fold Off-Target Reduction",
      "description": "Eliminating off-target cleavage while maintaining high on-target efficiency.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s5",
      "label": "Cas9 Nickase (Cas9n D10A) Dual-Guide Strategy",
      "description": "Using mutant Cas9 that cuts only single strands to double target specificity.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s5_d1",
      "label": "Paired Adjacent Single-Strand Nicks",
      "description": "Requiring two offset guide RNAs to generate a double-strand break.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t3_s5_d2",
      "label": "Single-Nick High Fidelity Repair",
      "description": "Ensuring isolated off-target single-strand nicks are repaired seamlessly by base excision repair.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4",
      "label": "Base Editing & Prime Editing Technologies",
      "description": "Next-generation gene editing systems making precise single-base or multi-base changes without double-strand breaks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s1",
      "label": "Cytosine Base Editors (CBE: dCas9-Cytidine Deaminase)",
      "description": "Converting C*G base pairs directly to T*A without double-strand breaks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s1_d1",
      "label": "APOBEC / rAPOBEC1 Cytidine Deaminase Fusion",
      "description": "De-aminating target cytosine (C) to uracil (U) within narrow 5bp editing windows.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s1_d2",
      "label": "Uracil Glycosylase Inhibitor (UGI) Shielding",
      "description": "Blocking base excision repair enzymes to prevent uracil removal.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s2",
      "label": "Adenine Base Editors (ABE: dCas9-TadA Mutants)",
      "description": "Converting A*T base pairs directly to G*C without double-strand breaks.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s2_d1",
      "label": "Engineered TadA EcTadA* Deaminase Architecture",
      "description": "Evolving tRNA adenosine deaminases to accept single-stranded DNA substrates.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s2_d2",
      "label": "Adenosine-to-Inosine Conversion (A -> I -> G)",
      "description": "De-aminating adenosine (A) to inosine (I), which reads as guanine (G) during DNA replication.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s3",
      "label": "Prime Editing Components (PE2: Cas9n + Reverse Transcriptase)",
      "description": "Search-and-replace gene editing system capable of writing arbitrary insertions, deletions, and base swaps.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s3_d1",
      "label": "Prime Editing Guide RNA (pegRNA)",
      "description": "Extending guide RNA with primer binding site (PBS) and reverse transcriptase (RT) template.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s3_d2",
      "label": "M-MLV Reverse Transcriptase Fusion",
      "description": "Synthesizing new DNA strands directly from pegRNA templates into genomic target sites.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s4",
      "label": "Prime Editing Optimization (PE3 & PE-max)",
      "description": "Enhancing prime editing efficiency using secondary nicking guides and engineered architectures.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s4_d1",
      "label": "PE3 System (Nicking Non-Edited Strand)",
      "description": "Nicking the non-edited strand to bias DNA repair toward incorporating the prime-edited flap.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s4_d2",
      "label": "Broad Multi-Nucleotide Substitution & Indel Insertion",
      "description": "Writing arbitrary edits up to 100bp without donor DNA or DSBs.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s5",
      "label": "Epigenetic Editors (CRISPRi / CRISPRa - dCas9-KRAB / dCas9-VP64)",
      "description": "Modulating gene expression without altering underlying DNA sequences.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s5_d1",
      "label": "CRISPR Interference (CRISPRi: dCas9-KRAB)",
      "description": "Recruiting heterochromatin silencers to repress gene transcription.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t4_s5_d2",
      "label": "CRISPR Activation (CRISPRa: dCas9-VP64 / VPR)",
      "description": "Recruiting transcription factors to strongly activate target gene expression.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5",
      "description": "Detailed first-principles mechanics for Synthetic Biology & Gene Editing (CRISPR) topic 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Biology & Gene Editing (CRISPR) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s1_d1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s1_d2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Biology & Gene Editing (CRISPR) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s2_d1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s2_d2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s3",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Biology & Gene Editing (CRISPR) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s3_d1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s3_d2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s4",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Biology & Gene Editing (CRISPR) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s4_d1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s4_d2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s5",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Biology & Gene Editing (CRISPR) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s5_d1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t5_s5_d2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6",
      "description": "Detailed first-principles mechanics for Synthetic Biology & Gene Editing (CRISPR) topic 6.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Biology & Gene Editing (CRISPR) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s1_d1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s1_d2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Biology & Gene Editing (CRISPR) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s2_d1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s2_d2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s3",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Biology & Gene Editing (CRISPR) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s3_d1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s3_d2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s4",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Biology & Gene Editing (CRISPR) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s4_d1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s4_d2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s5",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Synthetic Biology & Gene Editing (CRISPR) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s5_d1",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "bio_root_p8_t6_s5_d2",
      "label": "Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synthetic Biology & Gene Editing (CRISPR) Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "bio_root",
      "target": "bio_root_p1"
    },
    {
      "source": "bio_root_p1",
      "target": "bio_root_p1_t1"
    },
    {
      "source": "bio_root_p1_t1",
      "target": "bio_root_p1_t1_s1"
    },
    {
      "source": "bio_root_p1_t1_s1",
      "target": "bio_root_p1_t1_s1_d1"
    },
    {
      "source": "bio_root_p1_t1_s1",
      "target": "bio_root_p1_t1_s1_d2"
    },
    {
      "source": "bio_root_p1_t1",
      "target": "bio_root_p1_t1_s2"
    },
    {
      "source": "bio_root_p1_t1_s2",
      "target": "bio_root_p1_t1_s2_d1"
    },
    {
      "source": "bio_root_p1_t1_s2",
      "target": "bio_root_p1_t1_s2_d2"
    },
    {
      "source": "bio_root_p1_t1",
      "target": "bio_root_p1_t1_s3"
    },
    {
      "source": "bio_root_p1_t1_s3",
      "target": "bio_root_p1_t1_s3_d1"
    },
    {
      "source": "bio_root_p1_t1_s3",
      "target": "bio_root_p1_t1_s3_d2"
    },
    {
      "source": "bio_root_p1_t1",
      "target": "bio_root_p1_t1_s4"
    },
    {
      "source": "bio_root_p1_t1_s4",
      "target": "bio_root_p1_t1_s4_d1"
    },
    {
      "source": "bio_root_p1_t1_s4",
      "target": "bio_root_p1_t1_s4_d2"
    },
    {
      "source": "bio_root_p1_t1",
      "target": "bio_root_p1_t1_s5"
    },
    {
      "source": "bio_root_p1_t1_s5",
      "target": "bio_root_p1_t1_s5_d1"
    },
    {
      "source": "bio_root_p1_t1_s5",
      "target": "bio_root_p1_t1_s5_d2"
    },
    {
      "source": "bio_root_p1",
      "target": "bio_root_p1_t2"
    },
    {
      "source": "bio_root_p1_t2",
      "target": "bio_root_p1_t2_s1"
    },
    {
      "source": "bio_root_p1_t2_s1",
      "target": "bio_root_p1_t2_s1_d1"
    },
    {
      "source": "bio_root_p1_t2_s1",
      "target": "bio_root_p1_t2_s1_d2"
    },
    {
      "source": "bio_root_p1_t2",
      "target": "bio_root_p1_t2_s2"
    },
    {
      "source": "bio_root_p1_t2_s2",
      "target": "bio_root_p1_t2_s2_d1"
    },
    {
      "source": "bio_root_p1_t2_s2",
      "target": "bio_root_p1_t2_s2_d2"
    },
    {
      "source": "bio_root_p1_t2",
      "target": "bio_root_p1_t2_s3"
    },
    {
      "source": "bio_root_p1_t2_s3",
      "target": "bio_root_p1_t2_s3_d1"
    },
    {
      "source": "bio_root_p1_t2_s3",
      "target": "bio_root_p1_t2_s3_d2"
    },
    {
      "source": "bio_root_p1_t2",
      "target": "bio_root_p1_t2_s4"
    },
    {
      "source": "bio_root_p1_t2_s4",
      "target": "bio_root_p1_t2_s4_d1"
    },
    {
      "source": "bio_root_p1_t2_s4",
      "target": "bio_root_p1_t2_s4_d2"
    },
    {
      "source": "bio_root_p1_t2",
      "target": "bio_root_p1_t2_s5"
    },
    {
      "source": "bio_root_p1_t2_s5",
      "target": "bio_root_p1_t2_s5_d1"
    },
    {
      "source": "bio_root_p1_t2_s5",
      "target": "bio_root_p1_t2_s5_d2"
    },
    {
      "source": "bio_root_p1",
      "target": "bio_root_p1_t3"
    },
    {
      "source": "bio_root_p1_t3",
      "target": "bio_root_p1_t3_s1"
    },
    {
      "source": "bio_root_p1_t3_s1",
      "target": "bio_root_p1_t3_s1_d1"
    },
    {
      "source": "bio_root_p1_t3_s1",
      "target": "bio_root_p1_t3_s1_d2"
    },
    {
      "source": "bio_root_p1_t3_s1",
      "target": "bio_root_p1_t3_s1_d3"
    },
    {
      "source": "bio_root_p1_t3_s1",
      "target": "bio_root_p1_t3_s1_d4"
    },
    {
      "source": "bio_root_p1_t3",
      "target": "bio_root_p1_t3_s2"
    },
    {
      "source": "bio_root_p1_t3_s2",
      "target": "bio_root_p1_t3_s2_d1"
    },
    {
      "source": "bio_root_p1_t3_s2",
      "target": "bio_root_p1_t3_s2_d2"
    },
    {
      "source": "bio_root_p1_t3_s2",
      "target": "bio_root_p1_t3_s2_d3"
    },
    {
      "source": "bio_root_p1_t3",
      "target": "bio_root_p1_t3_s3"
    },
    {
      "source": "bio_root_p1_t3_s3",
      "target": "bio_root_p1_t3_s3_d1"
    },
    {
      "source": "bio_root_p1_t3_s3",
      "target": "bio_root_p1_t3_s3_d2"
    },
    {
      "source": "bio_root_p1_t3",
      "target": "bio_root_p1_t3_s4"
    },
    {
      "source": "bio_root_p1_t3_s4",
      "target": "bio_root_p1_t3_s4_d1"
    },
    {
      "source": "bio_root_p1_t3_s4",
      "target": "bio_root_p1_t3_s4_d2"
    },
    {
      "source": "bio_root_p1_t3",
      "target": "bio_root_p1_t3_s5"
    },
    {
      "source": "bio_root_p1_t3_s5",
      "target": "bio_root_p1_t3_s5_d1"
    },
    {
      "source": "bio_root_p1_t3_s5",
      "target": "bio_root_p1_t3_s5_d2"
    },
    {
      "source": "bio_root_p1",
      "target": "bio_root_p1_t4"
    },
    {
      "source": "bio_root_p1_t4",
      "target": "bio_root_p1_t4_s1"
    },
    {
      "source": "bio_root_p1_t4_s1",
      "target": "bio_root_p1_t4_s1_d1"
    },
    {
      "source": "bio_root_p1_t4_s1",
      "target": "bio_root_p1_t4_s1_d2"
    },
    {
      "source": "bio_root_p1_t4",
      "target": "bio_root_p1_t4_s2"
    },
    {
      "source": "bio_root_p1_t4_s2",
      "target": "bio_root_p1_t4_s2_d1"
    },
    {
      "source": "bio_root_p1_t4_s2",
      "target": "bio_root_p1_t4_s2_d2"
    },
    {
      "source": "bio_root_p1_t4",
      "target": "bio_root_p1_t4_s3"
    },
    {
      "source": "bio_root_p1_t4_s3",
      "target": "bio_root_p1_t4_s3_d1"
    },
    {
      "source": "bio_root_p1_t4_s3",
      "target": "bio_root_p1_t4_s3_d2"
    },
    {
      "source": "bio_root_p1_t4",
      "target": "bio_root_p1_t4_s4"
    },
    {
      "source": "bio_root_p1_t4_s4",
      "target": "bio_root_p1_t4_s4_d1"
    },
    {
      "source": "bio_root_p1_t4_s4",
      "target": "bio_root_p1_t4_s4_d2"
    },
    {
      "source": "bio_root_p1_t4",
      "target": "bio_root_p1_t4_s5"
    },
    {
      "source": "bio_root_p1_t4_s5",
      "target": "bio_root_p1_t4_s5_d1"
    },
    {
      "source": "bio_root_p1_t4_s5",
      "target": "bio_root_p1_t4_s5_d2"
    },
    {
      "source": "bio_root_p1",
      "target": "bio_root_p1_t5"
    },
    {
      "source": "bio_root_p1_t5",
      "target": "bio_root_p1_t5_s1"
    },
    {
      "source": "bio_root_p1_t5_s1",
      "target": "bio_root_p1_t5_s1_d1"
    },
    {
      "source": "bio_root_p1_t5_s1",
      "target": "bio_root_p1_t5_s1_d2"
    },
    {
      "source": "bio_root_p1_t5",
      "target": "bio_root_p1_t5_s2"
    },
    {
      "source": "bio_root_p1_t5_s2",
      "target": "bio_root_p1_t5_s2_d1"
    },
    {
      "source": "bio_root_p1_t5_s2",
      "target": "bio_root_p1_t5_s2_d2"
    },
    {
      "source": "bio_root_p1_t5",
      "target": "bio_root_p1_t5_s3"
    },
    {
      "source": "bio_root_p1_t5_s3",
      "target": "bio_root_p1_t5_s3_d1"
    },
    {
      "source": "bio_root_p1_t5_s3",
      "target": "bio_root_p1_t5_s3_d2"
    },
    {
      "source": "bio_root_p1_t5",
      "target": "bio_root_p1_t5_s4"
    },
    {
      "source": "bio_root_p1_t5_s4",
      "target": "bio_root_p1_t5_s4_d1"
    },
    {
      "source": "bio_root_p1_t5_s4",
      "target": "bio_root_p1_t5_s4_d2"
    },
    {
      "source": "bio_root_p1_t5",
      "target": "bio_root_p1_t5_s5"
    },
    {
      "source": "bio_root_p1_t5_s5",
      "target": "bio_root_p1_t5_s5_d1"
    },
    {
      "source": "bio_root_p1_t5_s5",
      "target": "bio_root_p1_t5_s5_d2"
    },
    {
      "source": "bio_root_p1",
      "target": "bio_root_p1_t6"
    },
    {
      "source": "bio_root_p1_t6",
      "target": "bio_root_p1_t6_s1"
    },
    {
      "source": "bio_root_p1_t6_s1",
      "target": "bio_root_p1_t6_s1_d1"
    },
    {
      "source": "bio_root_p1_t6_s1",
      "target": "bio_root_p1_t6_s1_d2"
    },
    {
      "source": "bio_root_p1_t6",
      "target": "bio_root_p1_t6_s2"
    },
    {
      "source": "bio_root_p1_t6_s2",
      "target": "bio_root_p1_t6_s2_d1"
    },
    {
      "source": "bio_root_p1_t6_s2",
      "target": "bio_root_p1_t6_s2_d2"
    },
    {
      "source": "bio_root_p1_t6",
      "target": "bio_root_p1_t6_s3"
    },
    {
      "source": "bio_root_p1_t6_s3",
      "target": "bio_root_p1_t6_s3_d1"
    },
    {
      "source": "bio_root_p1_t6_s3",
      "target": "bio_root_p1_t6_s3_d2"
    },
    {
      "source": "bio_root_p1_t6",
      "target": "bio_root_p1_t6_s4"
    },
    {
      "source": "bio_root_p1_t6_s4",
      "target": "bio_root_p1_t6_s4_d1"
    },
    {
      "source": "bio_root_p1_t6_s4",
      "target": "bio_root_p1_t6_s4_d2"
    },
    {
      "source": "bio_root_p1_t6",
      "target": "bio_root_p1_t6_s5"
    },
    {
      "source": "bio_root_p1_t6_s5",
      "target": "bio_root_p1_t6_s5_d1"
    },
    {
      "source": "bio_root_p1_t6_s5",
      "target": "bio_root_p1_t6_s5_d2"
    },
    {
      "source": "bio_root",
      "target": "bio_root_p2"
    },
    {
      "source": "bio_root_p2",
      "target": "bio_root_p2_t1"
    },
    {
      "source": "bio_root_p2_t1",
      "target": "bio_root_p2_t1_s1"
    },
    {
      "source": "bio_root_p2_t1_s1",
      "target": "bio_root_p2_t1_s1_d1"
    },
    {
      "source": "bio_root_p2_t1_s1",
      "target": "bio_root_p2_t1_s1_d2"
    },
    {
      "source": "bio_root_p2_t1",
      "target": "bio_root_p2_t1_s2"
    },
    {
      "source": "bio_root_p2_t1_s2",
      "target": "bio_root_p2_t1_s2_d1"
    },
    {
      "source": "bio_root_p2_t1_s2",
      "target": "bio_root_p2_t1_s2_d2"
    },
    {
      "source": "bio_root_p2_t1",
      "target": "bio_root_p2_t1_s3"
    },
    {
      "source": "bio_root_p2_t1_s3",
      "target": "bio_root_p2_t1_s3_d1"
    },
    {
      "source": "bio_root_p2_t1_s3",
      "target": "bio_root_p2_t1_s3_d2"
    },
    {
      "source": "bio_root_p2_t1",
      "target": "bio_root_p2_t1_s4"
    },
    {
      "source": "bio_root_p2_t1_s4",
      "target": "bio_root_p2_t1_s4_d1"
    },
    {
      "source": "bio_root_p2_t1_s4",
      "target": "bio_root_p2_t1_s4_d2"
    },
    {
      "source": "bio_root_p2_t1",
      "target": "bio_root_p2_t1_s5"
    },
    {
      "source": "bio_root_p2_t1_s5",
      "target": "bio_root_p2_t1_s5_d1"
    },
    {
      "source": "bio_root_p2_t1_s5",
      "target": "bio_root_p2_t1_s5_d2"
    },
    {
      "source": "bio_root_p2",
      "target": "bio_root_p2_t2"
    },
    {
      "source": "bio_root_p2_t2",
      "target": "bio_root_p2_t2_s1"
    },
    {
      "source": "bio_root_p2_t2_s1",
      "target": "bio_root_p2_t2_s1_d1"
    },
    {
      "source": "bio_root_p2_t2_s1",
      "target": "bio_root_p2_t2_s1_d2"
    },
    {
      "source": "bio_root_p2_t2",
      "target": "bio_root_p2_t2_s2"
    },
    {
      "source": "bio_root_p2_t2_s2",
      "target": "bio_root_p2_t2_s2_d1"
    },
    {
      "source": "bio_root_p2_t2_s2",
      "target": "bio_root_p2_t2_s2_d2"
    },
    {
      "source": "bio_root_p2_t2",
      "target": "bio_root_p2_t2_s3"
    },
    {
      "source": "bio_root_p2_t2_s3",
      "target": "bio_root_p2_t2_s3_d1"
    },
    {
      "source": "bio_root_p2_t2_s3",
      "target": "bio_root_p2_t2_s3_d2"
    },
    {
      "source": "bio_root_p2_t2",
      "target": "bio_root_p2_t2_s4"
    },
    {
      "source": "bio_root_p2_t2_s4",
      "target": "bio_root_p2_t2_s4_d1"
    },
    {
      "source": "bio_root_p2_t2_s4",
      "target": "bio_root_p2_t2_s4_d2"
    },
    {
      "source": "bio_root_p2_t2",
      "target": "bio_root_p2_t2_s5"
    },
    {
      "source": "bio_root_p2_t2_s5",
      "target": "bio_root_p2_t2_s5_d1"
    },
    {
      "source": "bio_root_p2_t2_s5",
      "target": "bio_root_p2_t2_s5_d2"
    },
    {
      "source": "bio_root_p2",
      "target": "bio_root_p2_t3"
    },
    {
      "source": "bio_root_p2_t3",
      "target": "bio_root_p2_t3_s1"
    },
    {
      "source": "bio_root_p2_t3_s1",
      "target": "bio_root_p2_t3_s1_d1"
    },
    {
      "source": "bio_root_p2_t3_s1",
      "target": "bio_root_p2_t3_s1_d2"
    },
    {
      "source": "bio_root_p2_t3",
      "target": "bio_root_p2_t3_s2"
    },
    {
      "source": "bio_root_p2_t3_s2",
      "target": "bio_root_p2_t3_s2_d1"
    },
    {
      "source": "bio_root_p2_t3_s2",
      "target": "bio_root_p2_t3_s2_d2"
    },
    {
      "source": "bio_root_p2_t3",
      "target": "bio_root_p2_t3_s3"
    },
    {
      "source": "bio_root_p2_t3_s3",
      "target": "bio_root_p2_t3_s3_d1"
    },
    {
      "source": "bio_root_p2_t3_s3",
      "target": "bio_root_p2_t3_s3_d2"
    },
    {
      "source": "bio_root_p2_t3",
      "target": "bio_root_p2_t3_s4"
    },
    {
      "source": "bio_root_p2_t3_s4",
      "target": "bio_root_p2_t3_s4_d1"
    },
    {
      "source": "bio_root_p2_t3_s4",
      "target": "bio_root_p2_t3_s4_d2"
    },
    {
      "source": "bio_root_p2_t3",
      "target": "bio_root_p2_t3_s5"
    },
    {
      "source": "bio_root_p2_t3_s5",
      "target": "bio_root_p2_t3_s5_d1"
    },
    {
      "source": "bio_root_p2_t3_s5",
      "target": "bio_root_p2_t3_s5_d2"
    },
    {
      "source": "bio_root_p2",
      "target": "bio_root_p2_t4"
    },
    {
      "source": "bio_root_p2_t4",
      "target": "bio_root_p2_t4_s1"
    },
    {
      "source": "bio_root_p2_t4_s1",
      "target": "bio_root_p2_t4_s1_d1"
    },
    {
      "source": "bio_root_p2_t4_s1",
      "target": "bio_root_p2_t4_s1_d2"
    },
    {
      "source": "bio_root_p2_t4",
      "target": "bio_root_p2_t4_s2"
    },
    {
      "source": "bio_root_p2_t4_s2",
      "target": "bio_root_p2_t4_s2_d1"
    },
    {
      "source": "bio_root_p2_t4_s2",
      "target": "bio_root_p2_t4_s2_d2"
    },
    {
      "source": "bio_root_p2_t4",
      "target": "bio_root_p2_t4_s3"
    },
    {
      "source": "bio_root_p2_t4_s3",
      "target": "bio_root_p2_t4_s3_d1"
    },
    {
      "source": "bio_root_p2_t4_s3",
      "target": "bio_root_p2_t4_s3_d2"
    },
    {
      "source": "bio_root_p2_t4",
      "target": "bio_root_p2_t4_s4"
    },
    {
      "source": "bio_root_p2_t4_s4",
      "target": "bio_root_p2_t4_s4_d1"
    },
    {
      "source": "bio_root_p2_t4_s4",
      "target": "bio_root_p2_t4_s4_d2"
    },
    {
      "source": "bio_root_p2_t4",
      "target": "bio_root_p2_t4_s5"
    },
    {
      "source": "bio_root_p2_t4_s5",
      "target": "bio_root_p2_t4_s5_d1"
    },
    {
      "source": "bio_root_p2_t4_s5",
      "target": "bio_root_p2_t4_s5_d2"
    },
    {
      "source": "bio_root_p2",
      "target": "bio_root_p2_t5"
    },
    {
      "source": "bio_root_p2_t5",
      "target": "bio_root_p2_t5_s1"
    },
    {
      "source": "bio_root_p2_t5_s1",
      "target": "bio_root_p2_t5_s1_d1"
    },
    {
      "source": "bio_root_p2_t5_s1",
      "target": "bio_root_p2_t5_s1_d2"
    },
    {
      "source": "bio_root_p2_t5",
      "target": "bio_root_p2_t5_s2"
    },
    {
      "source": "bio_root_p2_t5_s2",
      "target": "bio_root_p2_t5_s2_d1"
    },
    {
      "source": "bio_root_p2_t5_s2",
      "target": "bio_root_p2_t5_s2_d2"
    },
    {
      "source": "bio_root_p2_t5",
      "target": "bio_root_p2_t5_s3"
    },
    {
      "source": "bio_root_p2_t5_s3",
      "target": "bio_root_p2_t5_s3_d1"
    },
    {
      "source": "bio_root_p2_t5_s3",
      "target": "bio_root_p2_t5_s3_d2"
    },
    {
      "source": "bio_root_p2_t5",
      "target": "bio_root_p2_t5_s4"
    },
    {
      "source": "bio_root_p2_t5_s4",
      "target": "bio_root_p2_t5_s4_d1"
    },
    {
      "source": "bio_root_p2_t5_s4",
      "target": "bio_root_p2_t5_s4_d2"
    },
    {
      "source": "bio_root_p2_t5",
      "target": "bio_root_p2_t5_s5"
    },
    {
      "source": "bio_root_p2_t5_s5",
      "target": "bio_root_p2_t5_s5_d1"
    },
    {
      "source": "bio_root_p2_t5_s5",
      "target": "bio_root_p2_t5_s5_d2"
    },
    {
      "source": "bio_root_p2",
      "target": "bio_root_p2_t6"
    },
    {
      "source": "bio_root_p2_t6",
      "target": "bio_root_p2_t6_s1"
    },
    {
      "source": "bio_root_p2_t6_s1",
      "target": "bio_root_p2_t6_s1_d1"
    },
    {
      "source": "bio_root_p2_t6_s1",
      "target": "bio_root_p2_t6_s1_d2"
    },
    {
      "source": "bio_root_p2_t6",
      "target": "bio_root_p2_t6_s2"
    },
    {
      "source": "bio_root_p2_t6_s2",
      "target": "bio_root_p2_t6_s2_d1"
    },
    {
      "source": "bio_root_p2_t6_s2",
      "target": "bio_root_p2_t6_s2_d2"
    },
    {
      "source": "bio_root_p2_t6",
      "target": "bio_root_p2_t6_s3"
    },
    {
      "source": "bio_root_p2_t6_s3",
      "target": "bio_root_p2_t6_s3_d1"
    },
    {
      "source": "bio_root_p2_t6_s3",
      "target": "bio_root_p2_t6_s3_d2"
    },
    {
      "source": "bio_root_p2_t6",
      "target": "bio_root_p2_t6_s4"
    },
    {
      "source": "bio_root_p2_t6_s4",
      "target": "bio_root_p2_t6_s4_d1"
    },
    {
      "source": "bio_root_p2_t6_s4",
      "target": "bio_root_p2_t6_s4_d2"
    },
    {
      "source": "bio_root_p2_t6",
      "target": "bio_root_p2_t6_s5"
    },
    {
      "source": "bio_root_p2_t6_s5",
      "target": "bio_root_p2_t6_s5_d1"
    },
    {
      "source": "bio_root_p2_t6_s5",
      "target": "bio_root_p2_t6_s5_d2"
    },
    {
      "source": "bio_root",
      "target": "bio_root_p3"
    },
    {
      "source": "bio_root_p3",
      "target": "bio_root_p3_t1"
    },
    {
      "source": "bio_root_p3_t1",
      "target": "bio_root_p3_t1_s1"
    },
    {
      "source": "bio_root_p3_t1_s1",
      "target": "bio_root_p3_t1_s1_d1"
    },
    {
      "source": "bio_root_p3_t1_s1",
      "target": "bio_root_p3_t1_s1_d2"
    },
    {
      "source": "bio_root_p3_t1",
      "target": "bio_root_p3_t1_s2"
    },
    {
      "source": "bio_root_p3_t1_s2",
      "target": "bio_root_p3_t1_s2_d1"
    },
    {
      "source": "bio_root_p3_t1_s2",
      "target": "bio_root_p3_t1_s2_d2"
    },
    {
      "source": "bio_root_p3_t1_s2",
      "target": "bio_root_p3_t1_s2_d3"
    },
    {
      "source": "bio_root_p3_t1",
      "target": "bio_root_p3_t1_s3"
    },
    {
      "source": "bio_root_p3_t1_s3",
      "target": "bio_root_p3_t1_s3_d1"
    },
    {
      "source": "bio_root_p3_t1_s3",
      "target": "bio_root_p3_t1_s3_d2"
    },
    {
      "source": "bio_root_p3_t1",
      "target": "bio_root_p3_t1_s4"
    },
    {
      "source": "bio_root_p3_t1_s4",
      "target": "bio_root_p3_t1_s4_d1"
    },
    {
      "source": "bio_root_p3_t1_s4",
      "target": "bio_root_p3_t1_s4_d2"
    },
    {
      "source": "bio_root_p3_t1",
      "target": "bio_root_p3_t1_s5"
    },
    {
      "source": "bio_root_p3_t1_s5",
      "target": "bio_root_p3_t1_s5_d1"
    },
    {
      "source": "bio_root_p3_t1_s5",
      "target": "bio_root_p3_t1_s5_d2"
    },
    {
      "source": "bio_root_p3",
      "target": "bio_root_p3_t2"
    },
    {
      "source": "bio_root_p3_t2",
      "target": "bio_root_p3_t2_s1"
    },
    {
      "source": "bio_root_p3_t2_s1",
      "target": "bio_root_p3_t2_s1_d1"
    },
    {
      "source": "bio_root_p3_t2_s1",
      "target": "bio_root_p3_t2_s1_d2"
    },
    {
      "source": "bio_root_p3_t2",
      "target": "bio_root_p3_t2_s2"
    },
    {
      "source": "bio_root_p3_t2_s2",
      "target": "bio_root_p3_t2_s2_d1"
    },
    {
      "source": "bio_root_p3_t2_s2",
      "target": "bio_root_p3_t2_s2_d2"
    },
    {
      "source": "bio_root_p3_t2",
      "target": "bio_root_p3_t2_s3"
    },
    {
      "source": "bio_root_p3_t2_s3",
      "target": "bio_root_p3_t2_s3_d1"
    },
    {
      "source": "bio_root_p3_t2_s3",
      "target": "bio_root_p3_t2_s3_d2"
    },
    {
      "source": "bio_root_p3_t2",
      "target": "bio_root_p3_t2_s4"
    },
    {
      "source": "bio_root_p3_t2_s4",
      "target": "bio_root_p3_t2_s4_d1"
    },
    {
      "source": "bio_root_p3_t2_s4",
      "target": "bio_root_p3_t2_s4_d2"
    },
    {
      "source": "bio_root_p3_t2",
      "target": "bio_root_p3_t2_s5"
    },
    {
      "source": "bio_root_p3_t2_s5",
      "target": "bio_root_p3_t2_s5_d1"
    },
    {
      "source": "bio_root_p3_t2_s5",
      "target": "bio_root_p3_t2_s5_d2"
    },
    {
      "source": "bio_root_p3",
      "target": "bio_root_p3_t3"
    },
    {
      "source": "bio_root_p3_t3",
      "target": "bio_root_p3_t3_s1"
    },
    {
      "source": "bio_root_p3_t3_s1",
      "target": "bio_root_p3_t3_s1_d1"
    },
    {
      "source": "bio_root_p3_t3_s1",
      "target": "bio_root_p3_t3_s1_d2"
    },
    {
      "source": "bio_root_p3_t3",
      "target": "bio_root_p3_t3_s2"
    },
    {
      "source": "bio_root_p3_t3_s2",
      "target": "bio_root_p3_t3_s2_d1"
    },
    {
      "source": "bio_root_p3_t3_s2",
      "target": "bio_root_p3_t3_s2_d2"
    },
    {
      "source": "bio_root_p3_t3",
      "target": "bio_root_p3_t3_s3"
    },
    {
      "source": "bio_root_p3_t3_s3",
      "target": "bio_root_p3_t3_s3_d1"
    },
    {
      "source": "bio_root_p3_t3_s3",
      "target": "bio_root_p3_t3_s3_d2"
    },
    {
      "source": "bio_root_p3_t3",
      "target": "bio_root_p3_t3_s4"
    },
    {
      "source": "bio_root_p3_t3_s4",
      "target": "bio_root_p3_t3_s4_d1"
    },
    {
      "source": "bio_root_p3_t3_s4",
      "target": "bio_root_p3_t3_s4_d2"
    },
    {
      "source": "bio_root_p3_t3",
      "target": "bio_root_p3_t3_s5"
    },
    {
      "source": "bio_root_p3_t3_s5",
      "target": "bio_root_p3_t3_s5_d1"
    },
    {
      "source": "bio_root_p3_t3_s5",
      "target": "bio_root_p3_t3_s5_d2"
    },
    {
      "source": "bio_root_p3",
      "target": "bio_root_p3_t4"
    },
    {
      "source": "bio_root_p3_t4",
      "target": "bio_root_p3_t4_s1"
    },
    {
      "source": "bio_root_p3_t4_s1",
      "target": "bio_root_p3_t4_s1_d1"
    },
    {
      "source": "bio_root_p3_t4_s1",
      "target": "bio_root_p3_t4_s1_d2"
    },
    {
      "source": "bio_root_p3_t4",
      "target": "bio_root_p3_t4_s2"
    },
    {
      "source": "bio_root_p3_t4_s2",
      "target": "bio_root_p3_t4_s2_d1"
    },
    {
      "source": "bio_root_p3_t4_s2",
      "target": "bio_root_p3_t4_s2_d2"
    },
    {
      "source": "bio_root_p3_t4",
      "target": "bio_root_p3_t4_s3"
    },
    {
      "source": "bio_root_p3_t4_s3",
      "target": "bio_root_p3_t4_s3_d1"
    },
    {
      "source": "bio_root_p3_t4_s3",
      "target": "bio_root_p3_t4_s3_d2"
    },
    {
      "source": "bio_root_p3_t4",
      "target": "bio_root_p3_t4_s4"
    },
    {
      "source": "bio_root_p3_t4_s4",
      "target": "bio_root_p3_t4_s4_d1"
    },
    {
      "source": "bio_root_p3_t4_s4",
      "target": "bio_root_p3_t4_s4_d2"
    },
    {
      "source": "bio_root_p3_t4",
      "target": "bio_root_p3_t4_s5"
    },
    {
      "source": "bio_root_p3_t4_s5",
      "target": "bio_root_p3_t4_s5_d1"
    },
    {
      "source": "bio_root_p3_t4_s5",
      "target": "bio_root_p3_t4_s5_d2"
    },
    {
      "source": "bio_root_p3",
      "target": "bio_root_p3_t5"
    },
    {
      "source": "bio_root_p3_t5",
      "target": "bio_root_p3_t5_s1"
    },
    {
      "source": "bio_root_p3_t5_s1",
      "target": "bio_root_p3_t5_s1_d1"
    },
    {
      "source": "bio_root_p3_t5_s1",
      "target": "bio_root_p3_t5_s1_d2"
    },
    {
      "source": "bio_root_p3_t5",
      "target": "bio_root_p3_t5_s2"
    },
    {
      "source": "bio_root_p3_t5_s2",
      "target": "bio_root_p3_t5_s2_d1"
    },
    {
      "source": "bio_root_p3_t5_s2",
      "target": "bio_root_p3_t5_s2_d2"
    },
    {
      "source": "bio_root_p3_t5",
      "target": "bio_root_p3_t5_s3"
    },
    {
      "source": "bio_root_p3_t5_s3",
      "target": "bio_root_p3_t5_s3_d1"
    },
    {
      "source": "bio_root_p3_t5_s3",
      "target": "bio_root_p3_t5_s3_d2"
    },
    {
      "source": "bio_root_p3_t5",
      "target": "bio_root_p3_t5_s4"
    },
    {
      "source": "bio_root_p3_t5_s4",
      "target": "bio_root_p3_t5_s4_d1"
    },
    {
      "source": "bio_root_p3_t5_s4",
      "target": "bio_root_p3_t5_s4_d2"
    },
    {
      "source": "bio_root_p3_t5",
      "target": "bio_root_p3_t5_s5"
    },
    {
      "source": "bio_root_p3_t5_s5",
      "target": "bio_root_p3_t5_s5_d1"
    },
    {
      "source": "bio_root_p3_t5_s5",
      "target": "bio_root_p3_t5_s5_d2"
    },
    {
      "source": "bio_root_p3",
      "target": "bio_root_p3_t6"
    },
    {
      "source": "bio_root_p3_t6",
      "target": "bio_root_p3_t6_s1"
    },
    {
      "source": "bio_root_p3_t6_s1",
      "target": "bio_root_p3_t6_s1_d1"
    },
    {
      "source": "bio_root_p3_t6_s1",
      "target": "bio_root_p3_t6_s1_d2"
    },
    {
      "source": "bio_root_p3_t6",
      "target": "bio_root_p3_t6_s2"
    },
    {
      "source": "bio_root_p3_t6_s2",
      "target": "bio_root_p3_t6_s2_d1"
    },
    {
      "source": "bio_root_p3_t6_s2",
      "target": "bio_root_p3_t6_s2_d2"
    },
    {
      "source": "bio_root_p3_t6",
      "target": "bio_root_p3_t6_s3"
    },
    {
      "source": "bio_root_p3_t6_s3",
      "target": "bio_root_p3_t6_s3_d1"
    },
    {
      "source": "bio_root_p3_t6_s3",
      "target": "bio_root_p3_t6_s3_d2"
    },
    {
      "source": "bio_root_p3_t6",
      "target": "bio_root_p3_t6_s4"
    },
    {
      "source": "bio_root_p3_t6_s4",
      "target": "bio_root_p3_t6_s4_d1"
    },
    {
      "source": "bio_root_p3_t6_s4",
      "target": "bio_root_p3_t6_s4_d2"
    },
    {
      "source": "bio_root_p3_t6",
      "target": "bio_root_p3_t6_s5"
    },
    {
      "source": "bio_root_p3_t6_s5",
      "target": "bio_root_p3_t6_s5_d1"
    },
    {
      "source": "bio_root_p3_t6_s5",
      "target": "bio_root_p3_t6_s5_d2"
    },
    {
      "source": "bio_root",
      "target": "bio_root_p4"
    },
    {
      "source": "bio_root_p4",
      "target": "bio_root_p4_t1"
    },
    {
      "source": "bio_root_p4_t1",
      "target": "bio_root_p4_t1_s1"
    },
    {
      "source": "bio_root_p4_t1_s1",
      "target": "bio_root_p4_t1_s1_d1"
    },
    {
      "source": "bio_root_p4_t1_s1",
      "target": "bio_root_p4_t1_s1_d2"
    },
    {
      "source": "bio_root_p4_t1",
      "target": "bio_root_p4_t1_s2"
    },
    {
      "source": "bio_root_p4_t1_s2",
      "target": "bio_root_p4_t1_s2_d1"
    },
    {
      "source": "bio_root_p4_t1_s2",
      "target": "bio_root_p4_t1_s2_d2"
    },
    {
      "source": "bio_root_p4_t1",
      "target": "bio_root_p4_t1_s3"
    },
    {
      "source": "bio_root_p4_t1_s3",
      "target": "bio_root_p4_t1_s3_d1"
    },
    {
      "source": "bio_root_p4_t1_s3",
      "target": "bio_root_p4_t1_s3_d2"
    },
    {
      "source": "bio_root_p4_t1",
      "target": "bio_root_p4_t1_s4"
    },
    {
      "source": "bio_root_p4_t1_s4",
      "target": "bio_root_p4_t1_s4_d1"
    },
    {
      "source": "bio_root_p4_t1_s4",
      "target": "bio_root_p4_t1_s4_d2"
    },
    {
      "source": "bio_root_p4_t1",
      "target": "bio_root_p4_t1_s5"
    },
    {
      "source": "bio_root_p4_t1_s5",
      "target": "bio_root_p4_t1_s5_d1"
    },
    {
      "source": "bio_root_p4_t1_s5",
      "target": "bio_root_p4_t1_s5_d2"
    },
    {
      "source": "bio_root_p4",
      "target": "bio_root_p4_t2"
    },
    {
      "source": "bio_root_p4_t2",
      "target": "bio_root_p4_t2_s1"
    },
    {
      "source": "bio_root_p4_t2_s1",
      "target": "bio_root_p4_t2_s1_d1"
    },
    {
      "source": "bio_root_p4_t2_s1",
      "target": "bio_root_p4_t2_s1_d2"
    },
    {
      "source": "bio_root_p4_t2",
      "target": "bio_root_p4_t2_s2"
    },
    {
      "source": "bio_root_p4_t2_s2",
      "target": "bio_root_p4_t2_s2_d1"
    },
    {
      "source": "bio_root_p4_t2_s2",
      "target": "bio_root_p4_t2_s2_d2"
    },
    {
      "source": "bio_root_p4_t2",
      "target": "bio_root_p4_t2_s3"
    },
    {
      "source": "bio_root_p4_t2_s3",
      "target": "bio_root_p4_t2_s3_d1"
    },
    {
      "source": "bio_root_p4_t2_s3",
      "target": "bio_root_p4_t2_s3_d2"
    },
    {
      "source": "bio_root_p4_t2",
      "target": "bio_root_p4_t2_s4"
    },
    {
      "source": "bio_root_p4_t2_s4",
      "target": "bio_root_p4_t2_s4_d1"
    },
    {
      "source": "bio_root_p4_t2_s4",
      "target": "bio_root_p4_t2_s4_d2"
    },
    {
      "source": "bio_root_p4_t2",
      "target": "bio_root_p4_t2_s5"
    },
    {
      "source": "bio_root_p4_t2_s5",
      "target": "bio_root_p4_t2_s5_d1"
    },
    {
      "source": "bio_root_p4_t2_s5",
      "target": "bio_root_p4_t2_s5_d2"
    },
    {
      "source": "bio_root_p4",
      "target": "bio_root_p4_t3"
    },
    {
      "source": "bio_root_p4_t3",
      "target": "bio_root_p4_t3_s1"
    },
    {
      "source": "bio_root_p4_t3_s1",
      "target": "bio_root_p4_t3_s1_d1"
    },
    {
      "source": "bio_root_p4_t3_s1",
      "target": "bio_root_p4_t3_s1_d2"
    },
    {
      "source": "bio_root_p4_t3",
      "target": "bio_root_p4_t3_s2"
    },
    {
      "source": "bio_root_p4_t3_s2",
      "target": "bio_root_p4_t3_s2_d1"
    },
    {
      "source": "bio_root_p4_t3_s2",
      "target": "bio_root_p4_t3_s2_d2"
    },
    {
      "source": "bio_root_p4_t3",
      "target": "bio_root_p4_t3_s3"
    },
    {
      "source": "bio_root_p4_t3_s3",
      "target": "bio_root_p4_t3_s3_d1"
    },
    {
      "source": "bio_root_p4_t3_s3",
      "target": "bio_root_p4_t3_s3_d2"
    },
    {
      "source": "bio_root_p4_t3",
      "target": "bio_root_p4_t3_s4"
    },
    {
      "source": "bio_root_p4_t3_s4",
      "target": "bio_root_p4_t3_s4_d1"
    },
    {
      "source": "bio_root_p4_t3_s4",
      "target": "bio_root_p4_t3_s4_d2"
    },
    {
      "source": "bio_root_p4_t3",
      "target": "bio_root_p4_t3_s5"
    },
    {
      "source": "bio_root_p4_t3_s5",
      "target": "bio_root_p4_t3_s5_d1"
    },
    {
      "source": "bio_root_p4_t3_s5",
      "target": "bio_root_p4_t3_s5_d2"
    },
    {
      "source": "bio_root_p4",
      "target": "bio_root_p4_t4"
    },
    {
      "source": "bio_root_p4_t4",
      "target": "bio_root_p4_t4_s1"
    },
    {
      "source": "bio_root_p4_t4_s1",
      "target": "bio_root_p4_t4_s1_d1"
    },
    {
      "source": "bio_root_p4_t4_s1",
      "target": "bio_root_p4_t4_s1_d2"
    },
    {
      "source": "bio_root_p4_t4",
      "target": "bio_root_p4_t4_s2"
    },
    {
      "source": "bio_root_p4_t4_s2",
      "target": "bio_root_p4_t4_s2_d1"
    },
    {
      "source": "bio_root_p4_t4_s2",
      "target": "bio_root_p4_t4_s2_d2"
    },
    {
      "source": "bio_root_p4_t4",
      "target": "bio_root_p4_t4_s3"
    },
    {
      "source": "bio_root_p4_t4_s3",
      "target": "bio_root_p4_t4_s3_d1"
    },
    {
      "source": "bio_root_p4_t4_s3",
      "target": "bio_root_p4_t4_s3_d2"
    },
    {
      "source": "bio_root_p4_t4",
      "target": "bio_root_p4_t4_s4"
    },
    {
      "source": "bio_root_p4_t4_s4",
      "target": "bio_root_p4_t4_s4_d1"
    },
    {
      "source": "bio_root_p4_t4_s4",
      "target": "bio_root_p4_t4_s4_d2"
    },
    {
      "source": "bio_root_p4_t4",
      "target": "bio_root_p4_t4_s5"
    },
    {
      "source": "bio_root_p4_t4_s5",
      "target": "bio_root_p4_t4_s5_d1"
    },
    {
      "source": "bio_root_p4_t4_s5",
      "target": "bio_root_p4_t4_s5_d2"
    },
    {
      "source": "bio_root_p4",
      "target": "bio_root_p4_t5"
    },
    {
      "source": "bio_root_p4_t5",
      "target": "bio_root_p4_t5_s1"
    },
    {
      "source": "bio_root_p4_t5_s1",
      "target": "bio_root_p4_t5_s1_d1"
    },
    {
      "source": "bio_root_p4_t5_s1",
      "target": "bio_root_p4_t5_s1_d2"
    },
    {
      "source": "bio_root_p4_t5",
      "target": "bio_root_p4_t5_s2"
    },
    {
      "source": "bio_root_p4_t5_s2",
      "target": "bio_root_p4_t5_s2_d1"
    },
    {
      "source": "bio_root_p4_t5_s2",
      "target": "bio_root_p4_t5_s2_d2"
    },
    {
      "source": "bio_root_p4_t5",
      "target": "bio_root_p4_t5_s3"
    },
    {
      "source": "bio_root_p4_t5_s3",
      "target": "bio_root_p4_t5_s3_d1"
    },
    {
      "source": "bio_root_p4_t5_s3",
      "target": "bio_root_p4_t5_s3_d2"
    },
    {
      "source": "bio_root_p4_t5",
      "target": "bio_root_p4_t5_s4"
    },
    {
      "source": "bio_root_p4_t5_s4",
      "target": "bio_root_p4_t5_s4_d1"
    },
    {
      "source": "bio_root_p4_t5_s4",
      "target": "bio_root_p4_t5_s4_d2"
    },
    {
      "source": "bio_root_p4_t5",
      "target": "bio_root_p4_t5_s5"
    },
    {
      "source": "bio_root_p4_t5_s5",
      "target": "bio_root_p4_t5_s5_d1"
    },
    {
      "source": "bio_root_p4_t5_s5",
      "target": "bio_root_p4_t5_s5_d2"
    },
    {
      "source": "bio_root_p4",
      "target": "bio_root_p4_t6"
    },
    {
      "source": "bio_root_p4_t6",
      "target": "bio_root_p4_t6_s1"
    },
    {
      "source": "bio_root_p4_t6_s1",
      "target": "bio_root_p4_t6_s1_d1"
    },
    {
      "source": "bio_root_p4_t6_s1",
      "target": "bio_root_p4_t6_s1_d2"
    },
    {
      "source": "bio_root_p4_t6",
      "target": "bio_root_p4_t6_s2"
    },
    {
      "source": "bio_root_p4_t6_s2",
      "target": "bio_root_p4_t6_s2_d1"
    },
    {
      "source": "bio_root_p4_t6_s2",
      "target": "bio_root_p4_t6_s2_d2"
    },
    {
      "source": "bio_root_p4_t6",
      "target": "bio_root_p4_t6_s3"
    },
    {
      "source": "bio_root_p4_t6_s3",
      "target": "bio_root_p4_t6_s3_d1"
    },
    {
      "source": "bio_root_p4_t6_s3",
      "target": "bio_root_p4_t6_s3_d2"
    },
    {
      "source": "bio_root_p4_t6",
      "target": "bio_root_p4_t6_s4"
    },
    {
      "source": "bio_root_p4_t6_s4",
      "target": "bio_root_p4_t6_s4_d1"
    },
    {
      "source": "bio_root_p4_t6_s4",
      "target": "bio_root_p4_t6_s4_d2"
    },
    {
      "source": "bio_root_p4_t6",
      "target": "bio_root_p4_t6_s5"
    },
    {
      "source": "bio_root_p4_t6_s5",
      "target": "bio_root_p4_t6_s5_d1"
    },
    {
      "source": "bio_root_p4_t6_s5",
      "target": "bio_root_p4_t6_s5_d2"
    },
    {
      "source": "bio_root",
      "target": "bio_root_p5"
    },
    {
      "source": "bio_root_p5",
      "target": "bio_root_p5_t1"
    },
    {
      "source": "bio_root_p5_t1",
      "target": "bio_root_p5_t1_s1"
    },
    {
      "source": "bio_root_p5_t1_s1",
      "target": "bio_root_p5_t1_s1_d1"
    },
    {
      "source": "bio_root_p5_t1_s1",
      "target": "bio_root_p5_t1_s1_d2"
    },
    {
      "source": "bio_root_p5_t1",
      "target": "bio_root_p5_t1_s2"
    },
    {
      "source": "bio_root_p5_t1_s2",
      "target": "bio_root_p5_t1_s2_d1"
    },
    {
      "source": "bio_root_p5_t1_s2",
      "target": "bio_root_p5_t1_s2_d2"
    },
    {
      "source": "bio_root_p5_t1",
      "target": "bio_root_p5_t1_s3"
    },
    {
      "source": "bio_root_p5_t1_s3",
      "target": "bio_root_p5_t1_s3_d1"
    },
    {
      "source": "bio_root_p5_t1_s3",
      "target": "bio_root_p5_t1_s3_d2"
    },
    {
      "source": "bio_root_p5_t1",
      "target": "bio_root_p5_t1_s4"
    },
    {
      "source": "bio_root_p5_t1_s4",
      "target": "bio_root_p5_t1_s4_d1"
    },
    {
      "source": "bio_root_p5_t1_s4",
      "target": "bio_root_p5_t1_s4_d2"
    },
    {
      "source": "bio_root_p5_t1",
      "target": "bio_root_p5_t1_s5"
    },
    {
      "source": "bio_root_p5_t1_s5",
      "target": "bio_root_p5_t1_s5_d1"
    },
    {
      "source": "bio_root_p5_t1_s5",
      "target": "bio_root_p5_t1_s5_d2"
    },
    {
      "source": "bio_root_p5",
      "target": "bio_root_p5_t2"
    },
    {
      "source": "bio_root_p5_t2",
      "target": "bio_root_p5_t2_s1"
    },
    {
      "source": "bio_root_p5_t2_s1",
      "target": "bio_root_p5_t2_s1_d1"
    },
    {
      "source": "bio_root_p5_t2_s1",
      "target": "bio_root_p5_t2_s1_d2"
    },
    {
      "source": "bio_root_p5_t2",
      "target": "bio_root_p5_t2_s2"
    },
    {
      "source": "bio_root_p5_t2_s2",
      "target": "bio_root_p5_t2_s2_d1"
    },
    {
      "source": "bio_root_p5_t2_s2",
      "target": "bio_root_p5_t2_s2_d2"
    },
    {
      "source": "bio_root_p5_t2",
      "target": "bio_root_p5_t2_s3"
    },
    {
      "source": "bio_root_p5_t2_s3",
      "target": "bio_root_p5_t2_s3_d1"
    },
    {
      "source": "bio_root_p5_t2_s3",
      "target": "bio_root_p5_t2_s3_d2"
    },
    {
      "source": "bio_root_p5_t2",
      "target": "bio_root_p5_t2_s4"
    },
    {
      "source": "bio_root_p5_t2_s4",
      "target": "bio_root_p5_t2_s4_d1"
    },
    {
      "source": "bio_root_p5_t2_s4",
      "target": "bio_root_p5_t2_s4_d2"
    },
    {
      "source": "bio_root_p5_t2",
      "target": "bio_root_p5_t2_s5"
    },
    {
      "source": "bio_root_p5_t2_s5",
      "target": "bio_root_p5_t2_s5_d1"
    },
    {
      "source": "bio_root_p5_t2_s5",
      "target": "bio_root_p5_t2_s5_d2"
    },
    {
      "source": "bio_root_p5",
      "target": "bio_root_p5_t3"
    },
    {
      "source": "bio_root_p5_t3",
      "target": "bio_root_p5_t3_s1"
    },
    {
      "source": "bio_root_p5_t3_s1",
      "target": "bio_root_p5_t3_s1_d1"
    },
    {
      "source": "bio_root_p5_t3_s1",
      "target": "bio_root_p5_t3_s1_d2"
    },
    {
      "source": "bio_root_p5_t3",
      "target": "bio_root_p5_t3_s2"
    },
    {
      "source": "bio_root_p5_t3_s2",
      "target": "bio_root_p5_t3_s2_d1"
    },
    {
      "source": "bio_root_p5_t3_s2",
      "target": "bio_root_p5_t3_s2_d2"
    },
    {
      "source": "bio_root_p5_t3",
      "target": "bio_root_p5_t3_s3"
    },
    {
      "source": "bio_root_p5_t3_s3",
      "target": "bio_root_p5_t3_s3_d1"
    },
    {
      "source": "bio_root_p5_t3_s3",
      "target": "bio_root_p5_t3_s3_d2"
    },
    {
      "source": "bio_root_p5_t3",
      "target": "bio_root_p5_t3_s4"
    },
    {
      "source": "bio_root_p5_t3_s4",
      "target": "bio_root_p5_t3_s4_d1"
    },
    {
      "source": "bio_root_p5_t3_s4",
      "target": "bio_root_p5_t3_s4_d2"
    },
    {
      "source": "bio_root_p5_t3",
      "target": "bio_root_p5_t3_s5"
    },
    {
      "source": "bio_root_p5_t3_s5",
      "target": "bio_root_p5_t3_s5_d1"
    },
    {
      "source": "bio_root_p5_t3_s5",
      "target": "bio_root_p5_t3_s5_d2"
    },
    {
      "source": "bio_root_p5",
      "target": "bio_root_p5_t4"
    },
    {
      "source": "bio_root_p5_t4",
      "target": "bio_root_p5_t4_s1"
    },
    {
      "source": "bio_root_p5_t4_s1",
      "target": "bio_root_p5_t4_s1_d1"
    },
    {
      "source": "bio_root_p5_t4_s1",
      "target": "bio_root_p5_t4_s1_d2"
    },
    {
      "source": "bio_root_p5_t4",
      "target": "bio_root_p5_t4_s2"
    },
    {
      "source": "bio_root_p5_t4_s2",
      "target": "bio_root_p5_t4_s2_d1"
    },
    {
      "source": "bio_root_p5_t4_s2",
      "target": "bio_root_p5_t4_s2_d2"
    },
    {
      "source": "bio_root_p5_t4",
      "target": "bio_root_p5_t4_s3"
    },
    {
      "source": "bio_root_p5_t4_s3",
      "target": "bio_root_p5_t4_s3_d1"
    },
    {
      "source": "bio_root_p5_t4_s3",
      "target": "bio_root_p5_t4_s3_d2"
    },
    {
      "source": "bio_root_p5_t4",
      "target": "bio_root_p5_t4_s4"
    },
    {
      "source": "bio_root_p5_t4_s4",
      "target": "bio_root_p5_t4_s4_d1"
    },
    {
      "source": "bio_root_p5_t4_s4",
      "target": "bio_root_p5_t4_s4_d2"
    },
    {
      "source": "bio_root_p5_t4",
      "target": "bio_root_p5_t4_s5"
    },
    {
      "source": "bio_root_p5_t4_s5",
      "target": "bio_root_p5_t4_s5_d1"
    },
    {
      "source": "bio_root_p5_t4_s5",
      "target": "bio_root_p5_t4_s5_d2"
    },
    {
      "source": "bio_root_p5",
      "target": "bio_root_p5_t5"
    },
    {
      "source": "bio_root_p5_t5",
      "target": "bio_root_p5_t5_s1"
    },
    {
      "source": "bio_root_p5_t5_s1",
      "target": "bio_root_p5_t5_s1_d1"
    },
    {
      "source": "bio_root_p5_t5_s1",
      "target": "bio_root_p5_t5_s1_d2"
    },
    {
      "source": "bio_root_p5_t5",
      "target": "bio_root_p5_t5_s2"
    },
    {
      "source": "bio_root_p5_t5_s2",
      "target": "bio_root_p5_t5_s2_d1"
    },
    {
      "source": "bio_root_p5_t5_s2",
      "target": "bio_root_p5_t5_s2_d2"
    },
    {
      "source": "bio_root_p5_t5",
      "target": "bio_root_p5_t5_s3"
    },
    {
      "source": "bio_root_p5_t5_s3",
      "target": "bio_root_p5_t5_s3_d1"
    },
    {
      "source": "bio_root_p5_t5_s3",
      "target": "bio_root_p5_t5_s3_d2"
    },
    {
      "source": "bio_root_p5_t5",
      "target": "bio_root_p5_t5_s4"
    },
    {
      "source": "bio_root_p5_t5_s4",
      "target": "bio_root_p5_t5_s4_d1"
    },
    {
      "source": "bio_root_p5_t5_s4",
      "target": "bio_root_p5_t5_s4_d2"
    },
    {
      "source": "bio_root_p5_t5",
      "target": "bio_root_p5_t5_s5"
    },
    {
      "source": "bio_root_p5_t5_s5",
      "target": "bio_root_p5_t5_s5_d1"
    },
    {
      "source": "bio_root_p5_t5_s5",
      "target": "bio_root_p5_t5_s5_d2"
    },
    {
      "source": "bio_root_p5",
      "target": "bio_root_p5_t6"
    },
    {
      "source": "bio_root_p5_t6",
      "target": "bio_root_p5_t6_s1"
    },
    {
      "source": "bio_root_p5_t6_s1",
      "target": "bio_root_p5_t6_s1_d1"
    },
    {
      "source": "bio_root_p5_t6_s1",
      "target": "bio_root_p5_t6_s1_d2"
    },
    {
      "source": "bio_root_p5_t6",
      "target": "bio_root_p5_t6_s2"
    },
    {
      "source": "bio_root_p5_t6_s2",
      "target": "bio_root_p5_t6_s2_d1"
    },
    {
      "source": "bio_root_p5_t6_s2",
      "target": "bio_root_p5_t6_s2_d2"
    },
    {
      "source": "bio_root_p5_t6",
      "target": "bio_root_p5_t6_s3"
    },
    {
      "source": "bio_root_p5_t6_s3",
      "target": "bio_root_p5_t6_s3_d1"
    },
    {
      "source": "bio_root_p5_t6_s3",
      "target": "bio_root_p5_t6_s3_d2"
    },
    {
      "source": "bio_root_p5_t6",
      "target": "bio_root_p5_t6_s4"
    },
    {
      "source": "bio_root_p5_t6_s4",
      "target": "bio_root_p5_t6_s4_d1"
    },
    {
      "source": "bio_root_p5_t6_s4",
      "target": "bio_root_p5_t6_s4_d2"
    },
    {
      "source": "bio_root_p5_t6",
      "target": "bio_root_p5_t6_s5"
    },
    {
      "source": "bio_root_p5_t6_s5",
      "target": "bio_root_p5_t6_s5_d1"
    },
    {
      "source": "bio_root_p5_t6_s5",
      "target": "bio_root_p5_t6_s5_d2"
    },
    {
      "source": "bio_root",
      "target": "bio_root_p6"
    },
    {
      "source": "bio_root_p6",
      "target": "bio_root_p6_t1"
    },
    {
      "source": "bio_root_p6_t1",
      "target": "bio_root_p6_t1_s1"
    },
    {
      "source": "bio_root_p6_t1_s1",
      "target": "bio_root_p6_t1_s1_d1"
    },
    {
      "source": "bio_root_p6_t1_s1",
      "target": "bio_root_p6_t1_s1_d2"
    },
    {
      "source": "bio_root_p6_t1",
      "target": "bio_root_p6_t1_s2"
    },
    {
      "source": "bio_root_p6_t1_s2",
      "target": "bio_root_p6_t1_s2_d1"
    },
    {
      "source": "bio_root_p6_t1_s2",
      "target": "bio_root_p6_t1_s2_d2"
    },
    {
      "source": "bio_root_p6_t1",
      "target": "bio_root_p6_t1_s3"
    },
    {
      "source": "bio_root_p6_t1_s3",
      "target": "bio_root_p6_t1_s3_d1"
    },
    {
      "source": "bio_root_p6_t1_s3",
      "target": "bio_root_p6_t1_s3_d2"
    },
    {
      "source": "bio_root_p6_t1",
      "target": "bio_root_p6_t1_s4"
    },
    {
      "source": "bio_root_p6_t1_s4",
      "target": "bio_root_p6_t1_s4_d1"
    },
    {
      "source": "bio_root_p6_t1_s4",
      "target": "bio_root_p6_t1_s4_d2"
    },
    {
      "source": "bio_root_p6_t1",
      "target": "bio_root_p6_t1_s5"
    },
    {
      "source": "bio_root_p6_t1_s5",
      "target": "bio_root_p6_t1_s5_d1"
    },
    {
      "source": "bio_root_p6_t1_s5",
      "target": "bio_root_p6_t1_s5_d2"
    },
    {
      "source": "bio_root_p6",
      "target": "bio_root_p6_t2"
    },
    {
      "source": "bio_root_p6_t2",
      "target": "bio_root_p6_t2_s1"
    },
    {
      "source": "bio_root_p6_t2_s1",
      "target": "bio_root_p6_t2_s1_d1"
    },
    {
      "source": "bio_root_p6_t2_s1",
      "target": "bio_root_p6_t2_s1_d2"
    },
    {
      "source": "bio_root_p6_t2",
      "target": "bio_root_p6_t2_s2"
    },
    {
      "source": "bio_root_p6_t2_s2",
      "target": "bio_root_p6_t2_s2_d1"
    },
    {
      "source": "bio_root_p6_t2_s2",
      "target": "bio_root_p6_t2_s2_d2"
    },
    {
      "source": "bio_root_p6_t2",
      "target": "bio_root_p6_t2_s3"
    },
    {
      "source": "bio_root_p6_t2_s3",
      "target": "bio_root_p6_t2_s3_d1"
    },
    {
      "source": "bio_root_p6_t2_s3",
      "target": "bio_root_p6_t2_s3_d2"
    },
    {
      "source": "bio_root_p6_t2",
      "target": "bio_root_p6_t2_s4"
    },
    {
      "source": "bio_root_p6_t2_s4",
      "target": "bio_root_p6_t2_s4_d1"
    },
    {
      "source": "bio_root_p6_t2_s4",
      "target": "bio_root_p6_t2_s4_d2"
    },
    {
      "source": "bio_root_p6_t2",
      "target": "bio_root_p6_t2_s5"
    },
    {
      "source": "bio_root_p6_t2_s5",
      "target": "bio_root_p6_t2_s5_d1"
    },
    {
      "source": "bio_root_p6_t2_s5",
      "target": "bio_root_p6_t2_s5_d2"
    },
    {
      "source": "bio_root_p6",
      "target": "bio_root_p6_t3"
    },
    {
      "source": "bio_root_p6_t3",
      "target": "bio_root_p6_t3_s1"
    },
    {
      "source": "bio_root_p6_t3_s1",
      "target": "bio_root_p6_t3_s1_d1"
    },
    {
      "source": "bio_root_p6_t3_s1",
      "target": "bio_root_p6_t3_s1_d2"
    },
    {
      "source": "bio_root_p6_t3",
      "target": "bio_root_p6_t3_s2"
    },
    {
      "source": "bio_root_p6_t3_s2",
      "target": "bio_root_p6_t3_s2_d1"
    },
    {
      "source": "bio_root_p6_t3_s2",
      "target": "bio_root_p6_t3_s2_d2"
    },
    {
      "source": "bio_root_p6_t3",
      "target": "bio_root_p6_t3_s3"
    },
    {
      "source": "bio_root_p6_t3_s3",
      "target": "bio_root_p6_t3_s3_d1"
    },
    {
      "source": "bio_root_p6_t3_s3",
      "target": "bio_root_p6_t3_s3_d2"
    },
    {
      "source": "bio_root_p6_t3",
      "target": "bio_root_p6_t3_s4"
    },
    {
      "source": "bio_root_p6_t3_s4",
      "target": "bio_root_p6_t3_s4_d1"
    },
    {
      "source": "bio_root_p6_t3_s4",
      "target": "bio_root_p6_t3_s4_d2"
    },
    {
      "source": "bio_root_p6_t3",
      "target": "bio_root_p6_t3_s5"
    },
    {
      "source": "bio_root_p6_t3_s5",
      "target": "bio_root_p6_t3_s5_d1"
    },
    {
      "source": "bio_root_p6_t3_s5",
      "target": "bio_root_p6_t3_s5_d2"
    },
    {
      "source": "bio_root_p6",
      "target": "bio_root_p6_t4"
    },
    {
      "source": "bio_root_p6_t4",
      "target": "bio_root_p6_t4_s1"
    },
    {
      "source": "bio_root_p6_t4_s1",
      "target": "bio_root_p6_t4_s1_d1"
    },
    {
      "source": "bio_root_p6_t4_s1",
      "target": "bio_root_p6_t4_s1_d2"
    },
    {
      "source": "bio_root_p6_t4",
      "target": "bio_root_p6_t4_s2"
    },
    {
      "source": "bio_root_p6_t4_s2",
      "target": "bio_root_p6_t4_s2_d1"
    },
    {
      "source": "bio_root_p6_t4_s2",
      "target": "bio_root_p6_t4_s2_d2"
    },
    {
      "source": "bio_root_p6_t4",
      "target": "bio_root_p6_t4_s3"
    },
    {
      "source": "bio_root_p6_t4_s3",
      "target": "bio_root_p6_t4_s3_d1"
    },
    {
      "source": "bio_root_p6_t4_s3",
      "target": "bio_root_p6_t4_s3_d2"
    },
    {
      "source": "bio_root_p6_t4",
      "target": "bio_root_p6_t4_s4"
    },
    {
      "source": "bio_root_p6_t4_s4",
      "target": "bio_root_p6_t4_s4_d1"
    },
    {
      "source": "bio_root_p6_t4_s4",
      "target": "bio_root_p6_t4_s4_d2"
    },
    {
      "source": "bio_root_p6_t4",
      "target": "bio_root_p6_t4_s5"
    },
    {
      "source": "bio_root_p6_t4_s5",
      "target": "bio_root_p6_t4_s5_d1"
    },
    {
      "source": "bio_root_p6_t4_s5",
      "target": "bio_root_p6_t4_s5_d2"
    },
    {
      "source": "bio_root_p6",
      "target": "bio_root_p6_t5"
    },
    {
      "source": "bio_root_p6_t5",
      "target": "bio_root_p6_t5_s1"
    },
    {
      "source": "bio_root_p6_t5_s1",
      "target": "bio_root_p6_t5_s1_d1"
    },
    {
      "source": "bio_root_p6_t5_s1",
      "target": "bio_root_p6_t5_s1_d2"
    },
    {
      "source": "bio_root_p6_t5",
      "target": "bio_root_p6_t5_s2"
    },
    {
      "source": "bio_root_p6_t5_s2",
      "target": "bio_root_p6_t5_s2_d1"
    },
    {
      "source": "bio_root_p6_t5_s2",
      "target": "bio_root_p6_t5_s2_d2"
    },
    {
      "source": "bio_root_p6_t5",
      "target": "bio_root_p6_t5_s3"
    },
    {
      "source": "bio_root_p6_t5_s3",
      "target": "bio_root_p6_t5_s3_d1"
    },
    {
      "source": "bio_root_p6_t5_s3",
      "target": "bio_root_p6_t5_s3_d2"
    },
    {
      "source": "bio_root_p6_t5",
      "target": "bio_root_p6_t5_s4"
    },
    {
      "source": "bio_root_p6_t5_s4",
      "target": "bio_root_p6_t5_s4_d1"
    },
    {
      "source": "bio_root_p6_t5_s4",
      "target": "bio_root_p6_t5_s4_d2"
    },
    {
      "source": "bio_root_p6_t5",
      "target": "bio_root_p6_t5_s5"
    },
    {
      "source": "bio_root_p6_t5_s5",
      "target": "bio_root_p6_t5_s5_d1"
    },
    {
      "source": "bio_root_p6_t5_s5",
      "target": "bio_root_p6_t5_s5_d2"
    },
    {
      "source": "bio_root_p6",
      "target": "bio_root_p6_t6"
    },
    {
      "source": "bio_root_p6_t6",
      "target": "bio_root_p6_t6_s1"
    },
    {
      "source": "bio_root_p6_t6_s1",
      "target": "bio_root_p6_t6_s1_d1"
    },
    {
      "source": "bio_root_p6_t6_s1",
      "target": "bio_root_p6_t6_s1_d2"
    },
    {
      "source": "bio_root_p6_t6",
      "target": "bio_root_p6_t6_s2"
    },
    {
      "source": "bio_root_p6_t6_s2",
      "target": "bio_root_p6_t6_s2_d1"
    },
    {
      "source": "bio_root_p6_t6_s2",
      "target": "bio_root_p6_t6_s2_d2"
    },
    {
      "source": "bio_root_p6_t6",
      "target": "bio_root_p6_t6_s3"
    },
    {
      "source": "bio_root_p6_t6_s3",
      "target": "bio_root_p6_t6_s3_d1"
    },
    {
      "source": "bio_root_p6_t6_s3",
      "target": "bio_root_p6_t6_s3_d2"
    },
    {
      "source": "bio_root_p6_t6",
      "target": "bio_root_p6_t6_s4"
    },
    {
      "source": "bio_root_p6_t6_s4",
      "target": "bio_root_p6_t6_s4_d1"
    },
    {
      "source": "bio_root_p6_t6_s4",
      "target": "bio_root_p6_t6_s4_d2"
    },
    {
      "source": "bio_root_p6_t6",
      "target": "bio_root_p6_t6_s5"
    },
    {
      "source": "bio_root_p6_t6_s5",
      "target": "bio_root_p6_t6_s5_d1"
    },
    {
      "source": "bio_root_p6_t6_s5",
      "target": "bio_root_p6_t6_s5_d2"
    },
    {
      "source": "bio_root",
      "target": "bio_root_p7"
    },
    {
      "source": "bio_root_p7",
      "target": "bio_root_p7_t1"
    },
    {
      "source": "bio_root_p7_t1",
      "target": "bio_root_p7_t1_s1"
    },
    {
      "source": "bio_root_p7_t1_s1",
      "target": "bio_root_p7_t1_s1_d1"
    },
    {
      "source": "bio_root_p7_t1_s1",
      "target": "bio_root_p7_t1_s1_d2"
    },
    {
      "source": "bio_root_p7_t1",
      "target": "bio_root_p7_t1_s2"
    },
    {
      "source": "bio_root_p7_t1_s2",
      "target": "bio_root_p7_t1_s2_d1"
    },
    {
      "source": "bio_root_p7_t1_s2",
      "target": "bio_root_p7_t1_s2_d2"
    },
    {
      "source": "bio_root_p7_t1",
      "target": "bio_root_p7_t1_s3"
    },
    {
      "source": "bio_root_p7_t1_s3",
      "target": "bio_root_p7_t1_s3_d1"
    },
    {
      "source": "bio_root_p7_t1_s3",
      "target": "bio_root_p7_t1_s3_d2"
    },
    {
      "source": "bio_root_p7_t1",
      "target": "bio_root_p7_t1_s4"
    },
    {
      "source": "bio_root_p7_t1_s4",
      "target": "bio_root_p7_t1_s4_d1"
    },
    {
      "source": "bio_root_p7_t1_s4",
      "target": "bio_root_p7_t1_s4_d2"
    },
    {
      "source": "bio_root_p7_t1",
      "target": "bio_root_p7_t1_s5"
    },
    {
      "source": "bio_root_p7_t1_s5",
      "target": "bio_root_p7_t1_s5_d1"
    },
    {
      "source": "bio_root_p7_t1_s5",
      "target": "bio_root_p7_t1_s5_d2"
    },
    {
      "source": "bio_root_p7",
      "target": "bio_root_p7_t2"
    },
    {
      "source": "bio_root_p7_t2",
      "target": "bio_root_p7_t2_s1"
    },
    {
      "source": "bio_root_p7_t2_s1",
      "target": "bio_root_p7_t2_s1_d1"
    },
    {
      "source": "bio_root_p7_t2_s1",
      "target": "bio_root_p7_t2_s1_d2"
    },
    {
      "source": "bio_root_p7_t2",
      "target": "bio_root_p7_t2_s2"
    },
    {
      "source": "bio_root_p7_t2_s2",
      "target": "bio_root_p7_t2_s2_d1"
    },
    {
      "source": "bio_root_p7_t2_s2",
      "target": "bio_root_p7_t2_s2_d2"
    },
    {
      "source": "bio_root_p7_t2",
      "target": "bio_root_p7_t2_s3"
    },
    {
      "source": "bio_root_p7_t2_s3",
      "target": "bio_root_p7_t2_s3_d1"
    },
    {
      "source": "bio_root_p7_t2_s3",
      "target": "bio_root_p7_t2_s3_d2"
    },
    {
      "source": "bio_root_p7_t2",
      "target": "bio_root_p7_t2_s4"
    },
    {
      "source": "bio_root_p7_t2_s4",
      "target": "bio_root_p7_t2_s4_d1"
    },
    {
      "source": "bio_root_p7_t2_s4",
      "target": "bio_root_p7_t2_s4_d2"
    },
    {
      "source": "bio_root_p7_t2",
      "target": "bio_root_p7_t2_s5"
    },
    {
      "source": "bio_root_p7_t2_s5",
      "target": "bio_root_p7_t2_s5_d1"
    },
    {
      "source": "bio_root_p7_t2_s5",
      "target": "bio_root_p7_t2_s5_d2"
    },
    {
      "source": "bio_root_p7",
      "target": "bio_root_p7_t3"
    },
    {
      "source": "bio_root_p7_t3",
      "target": "bio_root_p7_t3_s1"
    },
    {
      "source": "bio_root_p7_t3_s1",
      "target": "bio_root_p7_t3_s1_d1"
    },
    {
      "source": "bio_root_p7_t3_s1",
      "target": "bio_root_p7_t3_s1_d2"
    },
    {
      "source": "bio_root_p7_t3",
      "target": "bio_root_p7_t3_s2"
    },
    {
      "source": "bio_root_p7_t3_s2",
      "target": "bio_root_p7_t3_s2_d1"
    },
    {
      "source": "bio_root_p7_t3_s2",
      "target": "bio_root_p7_t3_s2_d2"
    },
    {
      "source": "bio_root_p7_t3",
      "target": "bio_root_p7_t3_s3"
    },
    {
      "source": "bio_root_p7_t3_s3",
      "target": "bio_root_p7_t3_s3_d1"
    },
    {
      "source": "bio_root_p7_t3_s3",
      "target": "bio_root_p7_t3_s3_d2"
    },
    {
      "source": "bio_root_p7_t3",
      "target": "bio_root_p7_t3_s4"
    },
    {
      "source": "bio_root_p7_t3_s4",
      "target": "bio_root_p7_t3_s4_d1"
    },
    {
      "source": "bio_root_p7_t3_s4",
      "target": "bio_root_p7_t3_s4_d2"
    },
    {
      "source": "bio_root_p7_t3",
      "target": "bio_root_p7_t3_s5"
    },
    {
      "source": "bio_root_p7_t3_s5",
      "target": "bio_root_p7_t3_s5_d1"
    },
    {
      "source": "bio_root_p7_t3_s5",
      "target": "bio_root_p7_t3_s5_d2"
    },
    {
      "source": "bio_root_p7",
      "target": "bio_root_p7_t4"
    },
    {
      "source": "bio_root_p7_t4",
      "target": "bio_root_p7_t4_s1"
    },
    {
      "source": "bio_root_p7_t4_s1",
      "target": "bio_root_p7_t4_s1_d1"
    },
    {
      "source": "bio_root_p7_t4_s1",
      "target": "bio_root_p7_t4_s1_d2"
    },
    {
      "source": "bio_root_p7_t4",
      "target": "bio_root_p7_t4_s2"
    },
    {
      "source": "bio_root_p7_t4_s2",
      "target": "bio_root_p7_t4_s2_d1"
    },
    {
      "source": "bio_root_p7_t4_s2",
      "target": "bio_root_p7_t4_s2_d2"
    },
    {
      "source": "bio_root_p7_t4",
      "target": "bio_root_p7_t4_s3"
    },
    {
      "source": "bio_root_p7_t4_s3",
      "target": "bio_root_p7_t4_s3_d1"
    },
    {
      "source": "bio_root_p7_t4_s3",
      "target": "bio_root_p7_t4_s3_d2"
    },
    {
      "source": "bio_root_p7_t4",
      "target": "bio_root_p7_t4_s4"
    },
    {
      "source": "bio_root_p7_t4_s4",
      "target": "bio_root_p7_t4_s4_d1"
    },
    {
      "source": "bio_root_p7_t4_s4",
      "target": "bio_root_p7_t4_s4_d2"
    },
    {
      "source": "bio_root_p7_t4",
      "target": "bio_root_p7_t4_s5"
    },
    {
      "source": "bio_root_p7_t4_s5",
      "target": "bio_root_p7_t4_s5_d1"
    },
    {
      "source": "bio_root_p7_t4_s5",
      "target": "bio_root_p7_t4_s5_d2"
    },
    {
      "source": "bio_root_p7",
      "target": "bio_root_p7_t5"
    },
    {
      "source": "bio_root_p7_t5",
      "target": "bio_root_p7_t5_s1"
    },
    {
      "source": "bio_root_p7_t5_s1",
      "target": "bio_root_p7_t5_s1_d1"
    },
    {
      "source": "bio_root_p7_t5_s1",
      "target": "bio_root_p7_t5_s1_d2"
    },
    {
      "source": "bio_root_p7_t5",
      "target": "bio_root_p7_t5_s2"
    },
    {
      "source": "bio_root_p7_t5_s2",
      "target": "bio_root_p7_t5_s2_d1"
    },
    {
      "source": "bio_root_p7_t5_s2",
      "target": "bio_root_p7_t5_s2_d2"
    },
    {
      "source": "bio_root_p7_t5",
      "target": "bio_root_p7_t5_s3"
    },
    {
      "source": "bio_root_p7_t5_s3",
      "target": "bio_root_p7_t5_s3_d1"
    },
    {
      "source": "bio_root_p7_t5_s3",
      "target": "bio_root_p7_t5_s3_d2"
    },
    {
      "source": "bio_root_p7_t5",
      "target": "bio_root_p7_t5_s4"
    },
    {
      "source": "bio_root_p7_t5_s4",
      "target": "bio_root_p7_t5_s4_d1"
    },
    {
      "source": "bio_root_p7_t5_s4",
      "target": "bio_root_p7_t5_s4_d2"
    },
    {
      "source": "bio_root_p7_t5",
      "target": "bio_root_p7_t5_s5"
    },
    {
      "source": "bio_root_p7_t5_s5",
      "target": "bio_root_p7_t5_s5_d1"
    },
    {
      "source": "bio_root_p7_t5_s5",
      "target": "bio_root_p7_t5_s5_d2"
    },
    {
      "source": "bio_root_p7",
      "target": "bio_root_p7_t6"
    },
    {
      "source": "bio_root_p7_t6",
      "target": "bio_root_p7_t6_s1"
    },
    {
      "source": "bio_root_p7_t6_s1",
      "target": "bio_root_p7_t6_s1_d1"
    },
    {
      "source": "bio_root_p7_t6_s1",
      "target": "bio_root_p7_t6_s1_d2"
    },
    {
      "source": "bio_root_p7_t6",
      "target": "bio_root_p7_t6_s2"
    },
    {
      "source": "bio_root_p7_t6_s2",
      "target": "bio_root_p7_t6_s2_d1"
    },
    {
      "source": "bio_root_p7_t6_s2",
      "target": "bio_root_p7_t6_s2_d2"
    },
    {
      "source": "bio_root_p7_t6",
      "target": "bio_root_p7_t6_s3"
    },
    {
      "source": "bio_root_p7_t6_s3",
      "target": "bio_root_p7_t6_s3_d1"
    },
    {
      "source": "bio_root_p7_t6_s3",
      "target": "bio_root_p7_t6_s3_d2"
    },
    {
      "source": "bio_root_p7_t6",
      "target": "bio_root_p7_t6_s4"
    },
    {
      "source": "bio_root_p7_t6_s4",
      "target": "bio_root_p7_t6_s4_d1"
    },
    {
      "source": "bio_root_p7_t6_s4",
      "target": "bio_root_p7_t6_s4_d2"
    },
    {
      "source": "bio_root_p7_t6",
      "target": "bio_root_p7_t6_s5"
    },
    {
      "source": "bio_root_p7_t6_s5",
      "target": "bio_root_p7_t6_s5_d1"
    },
    {
      "source": "bio_root_p7_t6_s5",
      "target": "bio_root_p7_t6_s5_d2"
    },
    {
      "source": "bio_root",
      "target": "bio_root_p8"
    },
    {
      "source": "bio_root_p8",
      "target": "bio_root_p8_t1"
    },
    {
      "source": "bio_root_p8_t1",
      "target": "bio_root_p8_t1_s1"
    },
    {
      "source": "bio_root_p8_t1_s1",
      "target": "bio_root_p8_t1_s1_d1"
    },
    {
      "source": "bio_root_p8_t1_s1",
      "target": "bio_root_p8_t1_s1_d2"
    },
    {
      "source": "bio_root_p8_t1",
      "target": "bio_root_p8_t1_s2"
    },
    {
      "source": "bio_root_p8_t1_s2",
      "target": "bio_root_p8_t1_s2_d1"
    },
    {
      "source": "bio_root_p8_t1_s2",
      "target": "bio_root_p8_t1_s2_d2"
    },
    {
      "source": "bio_root_p8_t1",
      "target": "bio_root_p8_t1_s3"
    },
    {
      "source": "bio_root_p8_t1_s3",
      "target": "bio_root_p8_t1_s3_d1"
    },
    {
      "source": "bio_root_p8_t1_s3",
      "target": "bio_root_p8_t1_s3_d2"
    },
    {
      "source": "bio_root_p8_t1",
      "target": "bio_root_p8_t1_s4"
    },
    {
      "source": "bio_root_p8_t1_s4",
      "target": "bio_root_p8_t1_s4_d1"
    },
    {
      "source": "bio_root_p8_t1_s4",
      "target": "bio_root_p8_t1_s4_d2"
    },
    {
      "source": "bio_root_p8_t1",
      "target": "bio_root_p8_t1_s5"
    },
    {
      "source": "bio_root_p8_t1_s5",
      "target": "bio_root_p8_t1_s5_d1"
    },
    {
      "source": "bio_root_p8_t1_s5",
      "target": "bio_root_p8_t1_s5_d2"
    },
    {
      "source": "bio_root_p8",
      "target": "bio_root_p8_t2"
    },
    {
      "source": "bio_root_p8_t2",
      "target": "bio_root_p8_t2_s1"
    },
    {
      "source": "bio_root_p8_t2_s1",
      "target": "bio_root_p8_t2_s1_d1"
    },
    {
      "source": "bio_root_p8_t2_s1",
      "target": "bio_root_p8_t2_s1_d2"
    },
    {
      "source": "bio_root_p8_t2",
      "target": "bio_root_p8_t2_s2"
    },
    {
      "source": "bio_root_p8_t2_s2",
      "target": "bio_root_p8_t2_s2_d1"
    },
    {
      "source": "bio_root_p8_t2_s2",
      "target": "bio_root_p8_t2_s2_d2"
    },
    {
      "source": "bio_root_p8_t2",
      "target": "bio_root_p8_t2_s3"
    },
    {
      "source": "bio_root_p8_t2_s3",
      "target": "bio_root_p8_t2_s3_d1"
    },
    {
      "source": "bio_root_p8_t2_s3",
      "target": "bio_root_p8_t2_s3_d2"
    },
    {
      "source": "bio_root_p8_t2",
      "target": "bio_root_p8_t2_s4"
    },
    {
      "source": "bio_root_p8_t2_s4",
      "target": "bio_root_p8_t2_s4_d1"
    },
    {
      "source": "bio_root_p8_t2_s4",
      "target": "bio_root_p8_t2_s4_d2"
    },
    {
      "source": "bio_root_p8_t2",
      "target": "bio_root_p8_t2_s5"
    },
    {
      "source": "bio_root_p8_t2_s5",
      "target": "bio_root_p8_t2_s5_d1"
    },
    {
      "source": "bio_root_p8_t2_s5",
      "target": "bio_root_p8_t2_s5_d2"
    },
    {
      "source": "bio_root_p8",
      "target": "bio_root_p8_t3"
    },
    {
      "source": "bio_root_p8_t3",
      "target": "bio_root_p8_t3_s1"
    },
    {
      "source": "bio_root_p8_t3_s1",
      "target": "bio_root_p8_t3_s1_d1"
    },
    {
      "source": "bio_root_p8_t3_s1",
      "target": "bio_root_p8_t3_s1_d2"
    },
    {
      "source": "bio_root_p8_t3",
      "target": "bio_root_p8_t3_s2"
    },
    {
      "source": "bio_root_p8_t3_s2",
      "target": "bio_root_p8_t3_s2_d1"
    },
    {
      "source": "bio_root_p8_t3_s2",
      "target": "bio_root_p8_t3_s2_d2"
    },
    {
      "source": "bio_root_p8_t3",
      "target": "bio_root_p8_t3_s3"
    },
    {
      "source": "bio_root_p8_t3_s3",
      "target": "bio_root_p8_t3_s3_d1"
    },
    {
      "source": "bio_root_p8_t3_s3",
      "target": "bio_root_p8_t3_s3_d2"
    },
    {
      "source": "bio_root_p8_t3",
      "target": "bio_root_p8_t3_s4"
    },
    {
      "source": "bio_root_p8_t3_s4",
      "target": "bio_root_p8_t3_s4_d1"
    },
    {
      "source": "bio_root_p8_t3_s4",
      "target": "bio_root_p8_t3_s4_d2"
    },
    {
      "source": "bio_root_p8_t3",
      "target": "bio_root_p8_t3_s5"
    },
    {
      "source": "bio_root_p8_t3_s5",
      "target": "bio_root_p8_t3_s5_d1"
    },
    {
      "source": "bio_root_p8_t3_s5",
      "target": "bio_root_p8_t3_s5_d2"
    },
    {
      "source": "bio_root_p8",
      "target": "bio_root_p8_t4"
    },
    {
      "source": "bio_root_p8_t4",
      "target": "bio_root_p8_t4_s1"
    },
    {
      "source": "bio_root_p8_t4_s1",
      "target": "bio_root_p8_t4_s1_d1"
    },
    {
      "source": "bio_root_p8_t4_s1",
      "target": "bio_root_p8_t4_s1_d2"
    },
    {
      "source": "bio_root_p8_t4",
      "target": "bio_root_p8_t4_s2"
    },
    {
      "source": "bio_root_p8_t4_s2",
      "target": "bio_root_p8_t4_s2_d1"
    },
    {
      "source": "bio_root_p8_t4_s2",
      "target": "bio_root_p8_t4_s2_d2"
    },
    {
      "source": "bio_root_p8_t4",
      "target": "bio_root_p8_t4_s3"
    },
    {
      "source": "bio_root_p8_t4_s3",
      "target": "bio_root_p8_t4_s3_d1"
    },
    {
      "source": "bio_root_p8_t4_s3",
      "target": "bio_root_p8_t4_s3_d2"
    },
    {
      "source": "bio_root_p8_t4",
      "target": "bio_root_p8_t4_s4"
    },
    {
      "source": "bio_root_p8_t4_s4",
      "target": "bio_root_p8_t4_s4_d1"
    },
    {
      "source": "bio_root_p8_t4_s4",
      "target": "bio_root_p8_t4_s4_d2"
    },
    {
      "source": "bio_root_p8_t4",
      "target": "bio_root_p8_t4_s5"
    },
    {
      "source": "bio_root_p8_t4_s5",
      "target": "bio_root_p8_t4_s5_d1"
    },
    {
      "source": "bio_root_p8_t4_s5",
      "target": "bio_root_p8_t4_s5_d2"
    },
    {
      "source": "bio_root_p8",
      "target": "bio_root_p8_t5"
    },
    {
      "source": "bio_root_p8_t5",
      "target": "bio_root_p8_t5_s1"
    },
    {
      "source": "bio_root_p8_t5_s1",
      "target": "bio_root_p8_t5_s1_d1"
    },
    {
      "source": "bio_root_p8_t5_s1",
      "target": "bio_root_p8_t5_s1_d2"
    },
    {
      "source": "bio_root_p8_t5",
      "target": "bio_root_p8_t5_s2"
    },
    {
      "source": "bio_root_p8_t5_s2",
      "target": "bio_root_p8_t5_s2_d1"
    },
    {
      "source": "bio_root_p8_t5_s2",
      "target": "bio_root_p8_t5_s2_d2"
    },
    {
      "source": "bio_root_p8_t5",
      "target": "bio_root_p8_t5_s3"
    },
    {
      "source": "bio_root_p8_t5_s3",
      "target": "bio_root_p8_t5_s3_d1"
    },
    {
      "source": "bio_root_p8_t5_s3",
      "target": "bio_root_p8_t5_s3_d2"
    },
    {
      "source": "bio_root_p8_t5",
      "target": "bio_root_p8_t5_s4"
    },
    {
      "source": "bio_root_p8_t5_s4",
      "target": "bio_root_p8_t5_s4_d1"
    },
    {
      "source": "bio_root_p8_t5_s4",
      "target": "bio_root_p8_t5_s4_d2"
    },
    {
      "source": "bio_root_p8_t5",
      "target": "bio_root_p8_t5_s5"
    },
    {
      "source": "bio_root_p8_t5_s5",
      "target": "bio_root_p8_t5_s5_d1"
    },
    {
      "source": "bio_root_p8_t5_s5",
      "target": "bio_root_p8_t5_s5_d2"
    },
    {
      "source": "bio_root_p8",
      "target": "bio_root_p8_t6"
    },
    {
      "source": "bio_root_p8_t6",
      "target": "bio_root_p8_t6_s1"
    },
    {
      "source": "bio_root_p8_t6_s1",
      "target": "bio_root_p8_t6_s1_d1"
    },
    {
      "source": "bio_root_p8_t6_s1",
      "target": "bio_root_p8_t6_s1_d2"
    },
    {
      "source": "bio_root_p8_t6",
      "target": "bio_root_p8_t6_s2"
    },
    {
      "source": "bio_root_p8_t6_s2",
      "target": "bio_root_p8_t6_s2_d1"
    },
    {
      "source": "bio_root_p8_t6_s2",
      "target": "bio_root_p8_t6_s2_d2"
    },
    {
      "source": "bio_root_p8_t6",
      "target": "bio_root_p8_t6_s3"
    },
    {
      "source": "bio_root_p8_t6_s3",
      "target": "bio_root_p8_t6_s3_d1"
    },
    {
      "source": "bio_root_p8_t6_s3",
      "target": "bio_root_p8_t6_s3_d2"
    },
    {
      "source": "bio_root_p8_t6",
      "target": "bio_root_p8_t6_s4"
    },
    {
      "source": "bio_root_p8_t6_s4",
      "target": "bio_root_p8_t6_s4_d1"
    },
    {
      "source": "bio_root_p8_t6_s4",
      "target": "bio_root_p8_t6_s4_d2"
    },
    {
      "source": "bio_root_p8_t6",
      "target": "bio_root_p8_t6_s5"
    },
    {
      "source": "bio_root_p8_t6_s5",
      "target": "bio_root_p8_t6_s5_d1"
    },
    {
      "source": "bio_root_p8_t6_s5",
      "target": "bio_root_p8_t6_s5_d2"
    }
  ]
};
