export interface Paper {
  title: string
  authors: string
  venue: string
  year: string
  // 可选：论文配图或缩略图（本地图像路径或在线URL）
  thumbnail?: string
  links: {
    paper?: string
    code?: string
    demo?: string
    website?: string
  }
}

export interface Demo {
  title: string
  url: string
  description?: { zh: string; en: string }
}

export interface ResearchPoint {
  id: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  papers: Paper[]
  demos?: Demo[]
}

export interface FlowNode {
  id: string
  label: { zh: string; en: string }
  position: { x: number; y: number }
  type?: 'default' | 'input' | 'output' | 'core' | 'executor' | 'research-point' | 'process'
}

export interface FlowEdge {
  id: string
  source: string
  target: string
}

export interface FlowDiagram {
  nodes: FlowNode[]
  edges: FlowEdge[]
  researchPointMapping: Record<string, string> // nodeId -> researchPointId
}

export interface ResearchDirection {
  id: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  flowDiagram: FlowDiagram
  researchPoints: ResearchPoint[]
}

export const researchDirections: ResearchDirection[] = [
  {
    id: 'semantic-parsing',
    title: {
      zh: '低资源场景下语义解析',
      en: 'Semantic Parsing in Low-Resource Scenarios',
    },
    description: {
      zh: '提升低资源场景下语义解析效果，重点关注安全感知、弱监督学习、模型一致性、知识遗忘和多模型协作等问题。',
      en: 'Improve semantic parsing effectiveness in low-resource scenarios, focusing on security awareness, weakly supervised learning, model consistency, knowledge forgetting, and multi-model collaboration.',
    },
    flowDiagram: {
      nodes: [
        // 左侧：研究目标部分
        {
          id: 'goal-title',
          label: { zh: '研究目标', en: 'Research Goal' },
          position: { x: 100, y: 50 },
          type: 'default',
        },
        {
          id: 'goal-desc',
          label: { zh: '提升低资源场景下语义解析效果', en: 'Improve semantic parsing effectiveness in low-resource scenarios' },
          position: { x: 100, y: 100 },
          type: 'default',
        },
        {
          id: 'input',
          label: { zh: '自然语言查询\n例: A地区近一个月人员在位率最高的单位是哪个?', en: 'Natural Language Query\nExample: Which unit in Area A had the highest presence rate?' },
          position: { x: 100, y: 170 },
          type: 'input',
        },
        {
          id: 'database',
          label: { zh: '数据库\n(静态/动态)', en: 'Database\n(Static/Dynamic)' },
          position: { x: 100, y: 270 },
          type: 'input',
        },
        {
          id: 'model',
          label: { zh: '安全感知的语义解析模型', en: 'Security-aware Semantic Parsing Model' },
          position: { x: 100, y: 370 },
          type: 'core',
        },
        {
          id: 'sql',
          label: { zh: '可执行SQL\nSELECT unit FROM region_a_units\nORDER BY presence_rate DESC LIMIT 1', en: 'Executable SQL\nSELECT unit FROM region_a_units\nORDER BY presence_rate DESC LIMIT 1' },
          position: { x: 100, y: 490 },
          type: 'output',
        },
        {
          id: 'reasoning',
          label: { zh: '程序化推理\nA地区, 一个月, 在位率', en: 'Programmatic Reasoning\nArea A, One month, Presence rate' },
          position: { x: 100, y: 590 },
          type: 'output',
        },
        {
          id: 'executor',
          label: { zh: '(执行器)', en: '(Executor)' },
          position: { x: 100, y: 690 },
          type: 'executor',
        },
        {
          id: 'result',
          label: { zh: '安全结果\nXX部门 (非敏感信息)', en: 'Secure Result\nXX Department (Non-sensitive)' },
          position: { x: 100, y: 770 },
          type: 'output',
        },
        // 右侧：研究点部分
        {
          id: 'rp1',
          label: { zh: '研究点1\n弱监督下推理线索驱动的语义解析方法\n输入: 自然语言, 表格, 答案\n过程: 推理线索发掘→对比实例构造\n自监督学习 (无标注程序)', en: 'RP1: Weakly Supervised Reasoning Clue-Driven\nInput: NL, Table, Answer\nProcess: Clue Mining→Contrastive Construction\nSelf-supervised (Unlabeled)' },
          position: { x: 600, y: 50 },
          type: 'research-point',
        },
        {
          id: 'rp2',
          label: { zh: '研究点2\n无监督下逻辑一致性驱动的语义解析方法\n输入: 程序, 表格, 无偏解析\n过程1: LLM内部偏见发掘→执行归纳→实例原型\n过程2: 上下文学习→指令微调\n(泛化性/可解释性, 非人工标注程序)', en: 'RP2: Unsupervised Logic Consistency-Driven\nInput: Program, Table, Unbiased\nProcess1: Bias Discovery→Execution→Prototype\nProcess2: In-context→Fine-tuning\n(Generalizability, Non-human annotated)' },
          position: { x: 600, y: 250 },
          type: 'research-point',
        },
        {
          id: 'rp3',
          label: { zh: '研究点3\n面向SQL组合泛化的持续语义解析方法\n输入: 自然语言, 关系数据库, 答案\n过程: LLM记忆重建→记忆回放→知识传递\n输出: 语义解析模型\n(动态数据)', en: 'RP3: Continuous Parsing for SQL Compositional Generalization\nInput: NL, Relational DB, Answer\nProcess: Memory Reconstruction→Replay→Transfer\nOutput: Semantic Parsing Model\n(Dynamic Data)' },
          position: { x: 600, y: 450 },
          type: 'research-point',
        },
        {
          id: 'rp4',
          label: { zh: '研究点4\n面向参数知识共享的持续语义解析方法\n输入: 自然语言, 关系数据库, 答案\n过程: LLM自适应预热→多专家元学习+动态协作推理\n输出: SQL生成\n(动态数据)', en: 'RP4: Continuous Parsing for Parameter Knowledge Sharing\nInput: NL, Relational DB, Answer\nProcess: Adaptive Pre-warming→Multi-expert Meta-learning+Collaborative\nOutput: SQL Generation\n(Dynamic Data)' },
          position: { x: 600, y: 650 },
          type: 'research-point',
        },
        {
          id: 'rp5',
          label: { zh: '研究点5\n数据库隐私感知的LLM安全语义方法\n过程1: 恶意模式归纳→直接攻击/基于先验/基于推理\n过程2: 数据自动合成→攻击性SQL/反事实推理/SQL-to-Text\n过程3: 推理预热 & 交替偏好优化\n目标: 防范数据库敏感数据泄露\n(安全对齐数据匮乏)', en: 'RP5: Database Privacy-aware LLM Secure Semantic\nProcess1: Malicious Pattern→Direct/Prior/Inference-based Attack\nProcess2: Auto Synthesis→Attacking SQL/Counterfactual/SQL-to-Text\nProcess3: Reasoning Pre-warming & Alternating Preference\nGoal: Prevent sensitive data leakage\n(Lack of security-aligned data)' },
          position: { x: 600, y: 850 },
          type: 'research-point',
        },
      ],
      edges: [
        // 左侧流程
        { id: 'e1', source: 'input', target: 'model' },
        { id: 'e2', source: 'database', target: 'model' },
        { id: 'e3', source: 'model', target: 'sql' },
        { id: 'e4', source: 'model', target: 'reasoning' },
        { id: 'e5', source: 'sql', target: 'executor' },
        { id: 'e6', source: 'reasoning', target: 'executor' },
        { id: 'e7', source: 'executor', target: 'result' },
        // 右侧研究点连接到模型
        { id: 'e8', source: 'rp1', target: 'model' },
        { id: 'e9', source: 'rp2', target: 'model' },
        { id: 'e10', source: 'rp3', target: 'model' },
        { id: 'e11', source: 'rp4', target: 'model' },
        { id: 'e12', source: 'rp5', target: 'model' },
      ],
      researchPointMapping: {
        rp1: 'weakly-supervised',
        rp2: 'logic-consistency',
        rp3: 'sql-combinatorial',
        rp4: 'parameter-sharing',
        rp5: 'privacy-aware',
      },
    },
    researchPoints: [
      {
        id: 'weakly-supervised',
        title: {
          zh: '弱监督下推理线索驱动的语义解析方法',
          en: 'Weakly Supervised Reasoning Clue-Driven Semantic Parsing Method',
        },
        description: {
          zh: '通过推理线索发掘、自监督学习和对比实例构造，在弱监督场景下提升语义解析效果。',
          en: 'Improve semantic parsing effectiveness in weakly supervised scenarios through reasoning clue discovery, self-supervised learning, and contrastive instance construction.',
        },
        papers: [
          {
            title: 'Weakly Supervised Reasoning Clue-Driven Semantic Parsing',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'logic-consistency',
        title: {
          zh: '无监督下逻辑一致性驱动的语义解析方法',
          en: 'Unsupervised Logic Consistency-Driven Semantic Parsing Method',
        },
        description: {
          zh: '通过LLM内部偏见发掘、执行归纳、实例原型、上下文学习和指令微调，提升模型推理一致性。',
          en: 'Improve model inference consistency through LLM internal bias discovery, execution induction, instance prototypes, in-context learning, and instruction fine-tuning.',
        },
        papers: [
          {
            title: 'Unsupervised Logic Consistency-Driven Semantic Parsing',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'sql-combinatorial',
        title: {
          zh: '面向SQL组合泛化的持续语义解析方法',
          en: 'Continuous Semantic Parsing Method for SQL Combinatorial Generalization',
        },
        description: {
          zh: '通过基于LLM记忆重建、记忆回放和知识传递，解决知识覆盖遗忘快的问题。',
          en: 'Address the problem of fast knowledge coverage forgetting through LLM memory reconstruction, memory replay, and knowledge transfer.',
        },
        papers: [
          {
            title: 'Continuous Semantic Parsing for SQL Combinatorial Generalization',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'parameter-sharing',
        title: {
          zh: '面向参数知识共享的持续语义解析方法',
          en: 'Continuous Semantic Parsing Method for Parameter Knowledge Sharing',
        },
        description: {
          zh: '通过LLM自适应预热、多专家元学习和动态协作推理，解决多模型间协作难的问题。',
          en: 'Address the problem of difficult multi-model collaboration through LLM adaptive pre-training, multi-expert meta-learning, and dynamic collaborative reasoning.',
        },
        papers: [
          {
            title: 'Continuous Semantic Parsing for Parameter Knowledge Sharing',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'privacy-aware',
        title: {
          zh: '数据库隐私感知的LLM安全语义方法',
          en: 'Database Privacy-aware LLM Secure Semantic Method',
        },
        description: {
          zh: '通过恶意模式归纳、数据自动合成、推理预热和交替偏好优化，防范数据库敏感数据泄露。',
          en: 'Prevent sensitive database data leakage through malicious pattern induction, automatic data synthesis, reasoning pre-training, and alternating preference optimization.',
        },
        papers: [
          {
            title: 'Database Privacy-aware LLM Secure Semantic Method',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'document-intelligence',
    title: {
      zh: '文档智能问答',
      en: 'Document Intelligence Question Answering',
    },
    description: {
      zh: '提升文档智能背景下复杂布局文档和多页文档的问答能力，重点关注跨区域推理、跨页推理、定位能力增强、检索增强和强化学习。',
      en: 'Improve question-answering capabilities for complex layout documents and multi-page documents under document intelligence, focusing on cross-region reasoning, cross-page reasoning, positioning capability enhancement, retrieval augmentation, and reinforcement learning.',
    },
    flowDiagram: {
      nodes: [
        // 研究目标部分
        {
          id: 'goal-title',
          label: { zh: '研究目标', en: 'Research Objectives' },
          position: { x: 100, y: 50 },
          type: 'default',
        },
        {
          id: 'goal-main',
          label: { zh: '提升文档智能背景下复杂布局文档和多页文档的问答能力', en: 'Enhance QA capabilities for complex layout and multi-page documents' },
          position: { x: 100, y: 100 },
          type: 'default',
        },
        // 子目标1：复杂布局文档
        {
          id: 'subgoal1-title',
          label: { zh: '如何有效理解复杂布局文档?', en: 'How to understand complex layout documents?' },
          position: { x: 100, y: 180 },
          type: 'default',
        },
        {
          id: 'subgoal1-challenges',
          label: { zh: '挑战: 证据遗漏, 定位不准, 推理不足', en: 'Challenges: Missing evidence, Inaccurate localization, Insufficient reasoning' },
          position: { x: 100, y: 230 },
          type: 'default',
        },
        {
          id: 'cross-region',
          label: { zh: '跨区域', en: 'Cross-region' },
          position: { x: 100, y: 290 },
          type: 'process',
        },
        {
          id: 'reasoning1',
          label: { zh: '推理', en: 'Reasoning' },
          position: { x: 250, y: 290 },
          type: 'process',
        },
        {
          id: 'output1',
          label: { zh: '结构化输出', en: 'Structured Output' },
          position: { x: 400, y: 290 },
          type: 'output',
        },
        {
          id: 'localize1',
          label: { zh: '定位跨区域证据信息', en: 'Localize cross-region evidence' },
          position: { x: 250, y: 340 },
          type: 'default',
        },
        // 子目标2：多页文档
        {
          id: 'subgoal2-title',
          label: { zh: '如何有效理解多页文档?', en: 'How to understand multi-page documents?' },
          position: { x: 100, y: 420 },
          type: 'default',
        },
        {
          id: 'subgoal2-challenges',
          label: { zh: '挑战: 信息冗余, 定位不准, 推理不足, 低效', en: 'Challenges: Redundancy, Inaccurate localization, Insufficient reasoning, Low efficiency' },
          position: { x: 100, y: 470 },
          type: 'default',
        },
        {
          id: 'coarse-retrieval',
          label: { zh: '粗粒度检索', en: 'Coarse-grained Retrieval' },
          position: { x: 100, y: 530 },
          type: 'process',
        },
        {
          id: 'fine-filtering',
          label: { zh: '细粒度tokens筛选', en: 'Fine-grained Token Filtering' },
          position: { x: 250, y: 530 },
          type: 'process',
        },
        {
          id: 'cross-page',
          label: { zh: '跨页', en: 'Cross-page' },
          position: { x: 400, y: 530 },
          type: 'process',
        },
        {
          id: 'reasoning2',
          label: { zh: '推理', en: 'Reasoning' },
          position: { x: 550, y: 530 },
          type: 'process',
        },
        {
          id: 'output2',
          label: { zh: '结构化输出', en: 'Structured Output' },
          position: { x: 700, y: 530 },
          type: 'output',
        },
        {
          id: 'localize2',
          label: { zh: '定位跨页证据信息', en: 'Localize cross-page evidence' },
          position: { x: 400, y: 580 },
          type: 'default',
        },
        // 研究方法部分
        {
          id: 'method-title',
          label: { zh: '研究方法', en: 'Research Methods' },
          position: { x: 100, y: 650 },
          type: 'default',
        },
        {
          id: 'rp1',
          label: { zh: '研究点1: 构造文档推理数据\n模板或样例 + 结构化输出 → 教师模型 → 思维链数据 → 学生模型 → 结构化输出', en: 'RP1: Construct Document Reasoning Data\nTemplate/Example + Structured Output → Teacher Model → Chain-of-Thought → Student Model → Structured Output' },
          position: { x: 100, y: 720 },
          type: 'research-point',
        },
        {
          id: 'rp2',
          label: { zh: '研究点2: 增强模型定位能力\n文本 + 视觉 → 跨模态注意力机制 → 跨模态特征\n文本引导 + 平衡注意力 → LLM', en: 'RP2: Enhance Model Positioning\nText + Vision → Cross-modal Attention → Cross-modal Features\nText Guidance + Balanced Attention → LLM' },
          position: { x: 500, y: 720 },
          type: 'research-point',
        },
        {
          id: 'rp3',
          label: { zh: '研究点3: 设计检索增强方法\n文档图片 → OCR文本检索 + 多模态相似度检索 + 关键词置信度检索 → 答案生成', en: 'RP3: Design Retrieval Augmentation\nDocument Image → OCR Text Retrieval + Multimodal Similarity + Keyword Confidence → Answer Generation' },
          position: { x: 100, y: 900 },
          type: 'research-point',
        },
        {
          id: 'rp4',
          label: { zh: '研究点4: 设计强化学习方法\n强化学习数据生成 → 文档理解策略模型 ↔ 奖励模型(格式/证据页/答案/一致性奖励) + 参考模型(KL)', en: 'RP4: Design Reinforcement Learning\nRL Data Generation → Policy Model ↔ Reward Model(Format/Evidence/Answer/Consistency) + Reference Model(KL)' },
          position: { x: 500, y: 900 },
          type: 'research-point',
        },
        // 应用研究部分
        {
          id: 'app-title',
          label: { zh: '应用研究', en: 'Application Research' },
          position: { x: 100, y: 1100 },
          type: 'default',
        },
        {
          id: 'efficiency',
          label: { zh: '效率\n冗余视觉信息裁剪 → 关键tokens融合 → 多专家模型', en: 'Efficiency\nRedundant Visual Info Cropping → Key Token Fusion → Multi-expert Models' },
          position: { x: 100, y: 1170 },
          type: 'research-point',
        },
        {
          id: 'performance',
          label: { zh: '性能\n数据增强 → 多模态信息对齐与融合 → 多智能体', en: 'Performance\nData Augmentation → Multimodal Alignment & Fusion → Multi-agent' },
          position: { x: 500, y: 1170 },
          type: 'research-point',
        },
      ],
      edges: [
        // 复杂布局流程
        { id: 'e1', source: 'cross-region', target: 'reasoning1' },
        { id: 'e2', source: 'reasoning1', target: 'output1' },
        // 多页文档流程
        { id: 'e3', source: 'coarse-retrieval', target: 'cross-page' },
        { id: 'e4', source: 'fine-filtering', target: 'cross-page' },
        { id: 'e5', source: 'cross-page', target: 'reasoning2' },
        { id: 'e6', source: 'reasoning2', target: 'output2' },
      ],
      researchPointMapping: {
        rp1: 'reasoning-data',
        rp2: 'positioning',
        rp3: 'retrieval-augmentation',
        rp4: 'reinforcement-learning',
      },
    },
    researchPoints: [
      {
        id: 'reasoning-data',
        title: {
          zh: '构造文档推理数据',
          en: 'Construct Document Reasoning Data',
        },
        description: {
          zh: '通过教师-学生模型方法，使用模板或样例生成思维链数据，训练学生模型产生结构化输出。',
          en: 'Generate chain-of-thought data using templates or examples through a teacher-student model approach, training the student model to produce structured outputs.',
        },
        papers: [
          {
            title: 'Constructing Document Reasoning Data for Question Answering',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            thumbnail: '/images/construction_process.png', // 或者完整的线上 URL
            links: {
              paper: 'https://arxiv.org/pdf/2403.00816',
              website: 'https://tomatoyuan.github.io/paperWebTest/',
              code: 'https://github.com/tomatoyuan/paperWebTest',
              demo: 'https://xxx',
            },
          },
        ],
      },
      {
        id: 'positioning',
        title: {
          zh: '增强模型定位能力',
          en: 'Enhance Model Positioning Capability',
        },
        description: {
          zh: '通过跨模态注意力机制融合文本和视觉特征，结合文本引导和平衡注意力增强LLM的定位能力。',
          en: 'Enhance LLM positioning capability through cross-modal attention mechanisms that fuse text and visual features, combined with text guidance and balanced attention.',
        },
        papers: [
          {
            title: 'Enhancing Model Positioning Capability for Document Understanding',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'retrieval-augmentation',
        title: {
          zh: '设计检索增强方法',
          en: 'Design Retrieval Augmentation Methods',
        },
        description: {
          zh: '通过OCR文本检索、多模态相似度检索和关键词置信度检索，增强文档问答的信息检索能力。',
          en: 'Enhance information retrieval capabilities for document question answering through OCR text retrieval, multimodal similarity retrieval, and keyword confidence retrieval.',
        },
        papers: [
          {
            title: 'Retrieval Augmentation Methods for Document Intelligence',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
      {
        id: 'reinforcement-learning',
        title: {
          zh: '设计强化学习方法',
          en: 'Design Reinforcement Learning Methods',
        },
        description: {
          zh: '通过参考模型、文档理解策略模型和奖励模型，使用格式奖励、证据页奖励、答案奖励和一致性奖励训练模型。',
          en: 'Train models using format rewards, evidence page rewards, answer rewards, and consistency rewards through reference models, document understanding policy models, and reward models.',
        },
        papers: [
          {
            title: 'Reinforcement Learning for Document Understanding',
            authors: 'Author 1, Author 2',
            venue: 'Conference/Journal',
            year: '2024',
            links: {
              paper: 'https://arxiv.org/abs/xxxx.xxxxx',
            },
          },
        ],
      },
    ],
  },
]

